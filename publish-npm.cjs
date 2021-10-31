const { execSync, exec } = require('child_process');
const fs = require('fs');
const path = require('path');

function publishPackages() {
  process.chdir('packages');

  const dirs = fs.readdirSync('.').filter((dir) => fs.statSync(dir).isDirectory() && fs.existsSync(path.join(process.cwd(), dir, 'src')));

  for (const dir of dirs) {
    process.chdir(dir);

    const pkg = JSON.parse(fs.readFileSync('package.json'));
    const pkgName = pkg.name;
    const pkgVersion = pkg.version;
    const publishConfig = pkg.publishConfig;

    console.log('Publishing package %s, version %s', pkgName, pkgVersion);

    if (!publishConfig || !publishConfig.directory) {
      console.error('publishConfig.directory not found. Please put this in package"s package.json');
      process.exit(1);
    }

    if (!fs.existsSync(path.join(process.cwd(), publishConfig.directory))) {
      console.error('publish directory not exists. Did you really build the package?');
      process.exit(1);
    }

    const buildPkg = JSON.parse(fs.readFileSync(`${publishConfig.directory}/package.json`));

    if (buildPkg.name !== pkgName && buildPkg.version !== pkg.version) {
      console.error('publish directory version doesn"t match with the package version. Did you really build the package?');
      process.exit(1);
    }

    try {
      execSync('yarn pack');
      fs.mkdirSync('_release');
      execSync('tar zxvf ./package.tgz --directory ./_release');

      const resolvedPkg = fs.readFileSync('_release/package/package.json');
      fs.writeFileSync(`${publishConfig.directory}/package.json`, resolvedPkg);

      execSync('rm package.tgz');
      execSync('rm -rf _release');

      execSync(`npm publish ${publishConfig.directory} --access ${publishConfig.access || 'public'}`);
    } catch (error) {
      clean(['_release', 'package.tgz']);
    }

    process.chdir('..');
  }

  process.chdir('..');
}

function addGitTags() {
  process.chdir('packages');

  const dirs = fs.readdirSync('.').filter((dir) => fs.statSync(dir).isDirectory() && fs.existsSync(path.join(process.cwd(), dir, 'src')));

  for (const dir of dirs) {
    process.chdir(dir);

    const pkg = JSON.parse(fs.readFileSync('package.json'));
    const pkgName = pkg.name;
    const pkgVersion = pkg.version;
    const tag = `${pkgName}@${pkgVersion}`;

    execSync(`git tag -a ${tag} -m "${tag}"`);

    process.chdir('..');
  }

  process.chdir('..');
}

function clean(dirs) {
  for (const dir of dirs) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

publishPackages();
addGitTags();

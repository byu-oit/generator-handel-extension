const Generator = require('yeoman-generator')
const chalk = require('chalk')

module.exports = class extends Generator {
  async prompting () {
    this.log(`Welcome to the ${chalk.red('handel-extension')} generator!`)

    const answers = await this.prompt([
      {
        type: 'input',
        name: 'extensionName',
        message: 'Extension name'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Extension description',
        default: 'Extension for the Handel deployment tool'
      },
      {
        type: 'input',
        name: 'serviceName',
        message: `Service type name`
      }
    ])
    this.answers = answers
  }

  writing () {
    this.log('Creating the initial files for the extension')

    const lowerExtensionName = this.answers.extensionName.toLowerCase()
    const lowerServiceName = this.answers.serviceName.toLowerCase()
    const upperServiceName = this.answers.serviceName.toUpperCase()
    const capitalizedServiceName = lowerServiceName.charAt(0).toUpperCase() + lowerServiceName.slice(1)

    // top-level files
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    )
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        lowerExtensionName,
        description: this.answers.descriptions
      }
    )
    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    )
    this.fs.copy(
      this.templatePath('tsconfig.json'),
      this.destinationPath('tsconfig.json')
    )
    this.fs.copy(
      this.templatePath('tslint.json'),
      this.destinationPath('tslint.json')
    )

    // src files
    this.fs.copyTpl(
      this.templatePath('src/extension.ts'),
      this.destinationPath('src/extension.ts'),
      {
        capitalizedServiceName,
        upperServiceName,
        lowerServiceName
      }
    )
    this.fs.copyTpl(
      this.templatePath('src/service.ts'),
      this.destinationPath('src/service.ts'),
      {
        capitalizedServiceName,
        upperServiceName
      }
    )

    // test files
    this.fs.copy(
      this.templatePath('test/fake-account-config.ts'),
      this.destinationPath('test/fake-account-config.ts')
    )
    this.fs.copyTpl(
      this.templatePath('test/service-test.ts'),
      this.destinationPath('test/service-test.ts'),
      {
        lowerExtensionName,
        capitalizedServiceName,
        upperServiceName,
        lowerServiceName
      }
    )
  }
}

# Project Wallace Diff Github Action

This GitHub actions posts your CSS to [projectwallace.com](https://www.projectwallace.com?ref=gh-diff-action), and auto-updates your project's latest CSS Analytics.

![null](https://repository-images.githubusercontent.com/256839387/bf395480-81c4-11ea-8821-2a7ff1d01063)

## Usage

### Inputs

| Name                    | Required   | Example                                                       | Description                                                                                                                                                                                                                                                                                                     |
| ----------------------- | ---------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `project-wallace-token` | _required_ | `project-wallace-token: ${{ secrets.PROJECT_WALLACE_TOKEN }}` | The webhook token for your project on projectwallace.com. You can find this token in the project settings. You must add this token to your [repository secrets](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets) first! |
| `css-path`              | _required_ | `css-path: ./build/style.css`                                 | Path to the CSS file that should be analyzed and compared to the data on projectwallace.com.                                                                                                                                                                                                                    |  |

### Example

`.github/workflows/auto-push-css.yaml`

```yaml
name: Auto-update CSS at projectwallace.com

on:
  push:
    branches: [master] # only run this action when the master branch is updated

jobs:
  cssDiff:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Project Wallace Diff
        uses: projectwallace/push-css-action@master
        with:
          project-wallace-token: ${{ secrets.PROJECT_WALLACE_TOKEN }}
          css-path: ./build/style.css
```

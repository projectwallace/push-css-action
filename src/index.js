const fs = require('fs')
const got = require('got')
const core = require('@actions/core')

async function run() {
	try {
		const cssPath = core.getInput('css-path')
		const webhookToken = core.getInput('project-wallace-token')

		// Read CSS file
		const css = fs.readFileSync(cssPath, 'utf8')

		// POST CSS to projectwallace.com to update the analytics
		await got(
			`https://www.projectwallace.com/api/webhooks/v2/imports?token=${webhookToken}`,
			{
				method: 'post',
				headers: {
					'Content-Type': 'text/plain',
					Accept: 'application/json',
				},
				body: css,
			}
		)
	} catch (error) {
		core.setFailed(error.message)
	}
}

run()

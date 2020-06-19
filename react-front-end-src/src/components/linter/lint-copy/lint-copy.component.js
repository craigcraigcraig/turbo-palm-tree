import React from 'react';
import { copyStyle } from './lint-copy.style'

export const LintCopy = () => (
    <div style={copyStyle}>
        <h2>Lint your CloudFormation template online, easily!</h2>

        <p>
            It's not always easy to keep up-to-date on the latest CloudFormation releases or best practices. 
            The linter has you covered. We'll vet your template against the CloudFormation spec & best practices driven by the community.
            Just paste your template below and click "Submit"!
        </p>
    </div>
)
import React, { useState } from 'react';

import { LintResults } from './lint-results'
import { TemplateBox } from './template-box';
import { LintCopy } from './lint-copy';


export const Linter = () => {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    
    return (
    <main className="container">
        <LintCopy />

        <div className="row">
            <div className="column">
                <TemplateBox setResults={setResults} setLoading={setLoading} loading={loading}/>
            </div>
            <div className="column">
                <LintResults results={results}/>
            </div>
        </div>
    </main>
)}
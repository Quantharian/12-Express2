// import { html } from 'lit-html';
import { createHeader } from './partials/header.js';
import { createHead } from './partials/head.js';
import { createFooter } from './partials/footer.js';
import { createDialogNav } from './partials/dialog-nav.js';

export const renderIndexHtml = () => {
    const title = 'Inicio | Bienvenido a un mundo de diversión';
    const pageTitle = 'Mystery Project';

    return `
        <!DOCTYPE html>
        <html lang="en">
            ${createHead(title)}
            <body>
            <link rel="stylesheet" href="/main.css">
                ${createHeader(pageTitle)}
                ${createDialogNav()}

                <main>
                    <section>
                        
                    </section>
                    <section>
                        <h2></h2>
                     
                    </section>
                </main>
                ${createFooter()}
            </body>
        </html>
    `;
};

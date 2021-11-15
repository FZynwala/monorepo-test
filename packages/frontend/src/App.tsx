import { logGreeting, toUpperCase } from '@monorepo-test/fz-shared';
import React from 'react';
import { ExampleComponent } from 'ui-components';
import 'ui-components/dist/index.css';

const App = () => {
    return (
        <>
            <ExampleComponent
                text={toUpperCase('Create React Library Example 😄')}
            />
            <ExampleComponent text={logGreeting('Jadwiga Chymel')} />
        </>
    );
};

export default App;

import { createElement } from 'react';


export const MyList = ({message,loading,response}) => {
    return createElement('ul', null, [
        createElement('li', null,`You : ${message}` ),
        createElement('li', null,`AI : ${loading ? "wait..." : response}` ),
      ]);
        
};



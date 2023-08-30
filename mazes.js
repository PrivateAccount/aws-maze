var mazeData = [
    { 
        name: '13ye', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |   |                                                           |
            o   o   o---o---o---o---o---o---o---o   o---o---o---o---o---o   o
            |   |                           |       |               |       |
            o   o   o---o   o---o   o---o---o   o---o   o---o---o   o---o   o
            |   |                       |           |   |       |   |       |
            o   o   o---o   o---o   o---o   o---o   o   o---o   o---o---o   o
            |   |                   |       |   |   |                       |
            o   o   o---o   o---o---o   o---o   o   o   o---o---o---o---o   o
            |   |               |       |       |   |   |           |       |
            o   o   o---o---o---o   o---o   o   o   o   o   o---o   o---o   o
            |   |           |       |       |   |   |   |   |   |           |
            o   o   o---o---o   o---o   o---o   o---o   o---o   o---o---o   o
            |   |       |           |   |           |                   |   |
            o   o---o   o   o---o   o   o---o---o   o   o---o---o---o---o   o
            |           |           |   |       |                           |
            o   o---o---o   o---o---o   o   o   o---o---o---o---o---o---o   o
            |           |           |   |           |                   |   |
            o   o---o   o   o---o   o   o---o---o   o   o---o   o---o---o   o
            |   |       |           |           |   |   |   |   |   |       |
            o   o   o---o---o   o---o   o---o   o   o   o   o---o   o---o   o
            |   |           |       |       |   |   |   |                   |
            o   o   o---o---o---o   o---o   o---o   o   o---o   o---o---o---o
            |   |               |       |       |   |       |               |
            o   o   o---o   o---o---o   o---o   o   o   o---o---o---o---o   o
            |   |                   |       |       |   |                   |
            o   o   o---o   o---o   o---o   o---o---o   o---o   o---o---o---o
            |   |                   |                       |               |
            o   o   o---o   o---o   o---o---o   o---o   o---o---o---o---o   o
            |   |                           |       |                       |
            o   o   o---o---o---o---o---o---o---o   o   o---o---o---o---o   o
            |   |                                   |                       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: '1st-world', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o   o---o   o---o
            |       |                                   |                   |
            o   o   o   o---o---o---o---o---o---o---o   o---o---o---o   o   o
            |   |   |                                               |   |   |
            o   o   o   o---o---o---o---o---o---o---o---o---o---o   o   o   o
            |   |   |       |   |                               |   |   |   |
            o   o   o   o   o   o   o---o---o---o---o---o   o   o   o   o   o
            |   |   |   |   |   |   |                   |   |   |   |       |
            o   o   o   o   o   o   o   o   o---o---o   o   o   o   o   o   o
            |       |           |   |   |                       |       |   |
            o   o---o   o   o   o   o   o   o---o---o   o---o---o   o---o   o
            |   |   |   |   |   |   |   |               |           |   |   |
            o   o   o   o   o   o   o   o---o---o   o   o   o---o---o   o   o
            |   |   |   |   |   |   |   |       |   |   |       |   |   |   |
            o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o
            |   |   |               |   |       |       |   |       |   |   |
            o   o   o   o---o---o---o   o---o   o---o---o   o   o   o   o---o
            |   |   |   |           |                   |   |   |       |   |
            o   o   o---o   o---o   o   o---o---o---o   o   o   o---o   o   o
            |   |   |   |   |       |                   |           |       |
            o   o   o   o   o   o   o---o   o---o   o---o---o---o   o   o   o
            |   |       |       |   |               |                   |   |
            o   o   o   o   o---o   o---o---o   o---o   o---o---o---o---o   o
            |       |       |       |           |                       |   |
            o---o---o---o---o   o---o---o   o---o---o---o---o---o   o---o   o
            |                       |                       |               |
            o   o---o---o   o---o   o---o---o   o---o---o   o---o---o   o   o
            |   |                           |                           |   |
            o   o   o---o---o---o---o---o   o   o---o---o---o---o---o---o   o
            |   |                           |                               |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: '2003-kankou', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |               |                                               |
            o   o---o---o   o---o   o---o---o---o---o   o---o   o---o   o   o
            |               |   |   |               |   |       |       |   |
            o   o---o   o---o---o   o   o---o---o   o   o---o---o   o---o   o
            |   |               |   |   |       |   |   |               |   |
            o   o   o---o---o   o   o   o   o   o   o   o   o---o---o   o   o
            |       |   |   |   |   |   |   |   |   |   |   |   |   |       |
            o   o---o   o---o   o   o   o---o---o   o---o   o---o   o---o   o
            |   |           |       |       |       |   |   |           |   |
            o   o   o---o   o   o---o---o---o---o---o   o   o   o---o   o   o
            |       |   |   |   |   |               |       |   |   |   |   |
            o   o---o   o   o---o   o   o---o---o   o   o---o   o   o   o   o
            |   |   |   |       |   |   |   |   |       |       |   |   |   |
            o   o   o   o---o   o---o   o---o---o---o---o   o---o   o   o   o
            |   |   |               |           |   |           |   |   |   |
            o   o---o   o---o---o   o---o   o   o---o   o---o---o   o   o   o
            |           |       |   |   |       |       |       |   |   |   |
            o   o---o   o   o---o   o   o---o---o   o   o---o   o   o   o   o
            |   |   |   |   |       |               |       |   |   |       |
            o   o---o   o   o---o   o   o---o---o---o   o---o   o   o---o   o
            |   |   |   |   |   |   |   |               |   |   |   |       |
            o   o   o---o   o---o   o   o   o---o---o---o---o   o---o---o   o
            |   |   |   |   |   |       |   |           |   |   |   |       |
            o   o   o   o   o   o   o---o   o   o---o   o   o   o   o   o   o
            |       |           |   |       |   |   |   |           |   |   |
            o   o   o---o---o---o   o   o---o   o---o   o---o---o---o   o   o
            |   |                   |   |                               |   |
            o   o   o---o---o---o---o   o   o---o---o---o---o---o---o---o   o
            |   |   |                   |               |   |           |   |
            o   o   o   o---o---o---o---o   o---o---o---o   o   o---o   o   o
            |   |                                               |   |       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: '3-path-test', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                   |                                           |
            o   o   o---o---o---o   o---o---o---o---o   o---o---o---o   o   o
            |   |           |   |   |               |   |               |   |
            o   o   o---o   o   o   o   o---o---o   o   o   o---o---o   o   o
            |       |   |       |   |           |   |   |       |   |       |
            o   o---o   o---o   o   o   o---o   o   o---o   o---o   o---o   o
            |   |           |   |   |           |   |       |               |
            o   o   o   o   o   o   o   o---o   o   o   o   o   o   o   o   o
            |   |   |   |   |       |               |   |   |   |   |   |   |
            o   o   o   o   o   o---o---o---o   o---o   o   o   o   o   o   o
            |       |   |   |   |                       |   |   |   |   |   |
            o   o   o   o   o---o   o   o---o---o   o---o---o   o   o   o   o
            |   |   |   |       |   |           |   |   |       |   |   |   |
            o   o   o   o---o   o---o---o---o   o---o---o   o---o   o   o   o
            |   |   |               |   |       |               |       |   |
            o   o   o   o---o---o   o   o   o   o   o   o---o---o   o---o   o
            |           |           |   |       |   |           |       |   |
            o   o   o   o   o---o   o   o---o---o   o   o---o   o   o   o   o
            |   |   |   |   |       |               |       |   |   |   |   |
            o   o   o   o   o   o   o   o---o---o---o   o   o   o   o   o   o
            |   |   |   |   |   |   |   |               |   |   |   |       |
            o   o   o   o   o   o   o   o   o---o---o   o   o   o   o   o   o
            |   |   |   |   |   |       |   |           |   |   |   |   |   |
            o   o   o   o   o   o   o   o   o   o---o   o   o   o   o   o   o
            |       |           |   |       |           |           |   |   |
            o   o   o---o---o---o   o   o---o   o---o   o---o---o---o   o   o
            |   |                   |   |                               |   |
            o   o   o---o---o---o---o   o   o---o---o---o---o---o---o---o   o
            |   |   |                   |   |                           |   |
            o   o   o   o---o---o---o---o   o---o---o---o   o---o---o   o   o
            |   |                                                   |       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: '50', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |       |               |       |                   |       |   |
            o   o   o   o   o   o   o   o   o---o   o---o---o   o   o   o   o
            |   |       |   |   |   |   |   |       |       |       |       |
            o   o---o---o   o   o   o   o   o   o---o   o   o---o---o---o   o
            |   |           |   |   |   |       |       |                   |
            o   o   o---o---o   o   o   o---o---o   o---o---o---o   o---o---o
            |   |   |               |   |   |       |               |       |
            o   o   o---o   o---o---o   o   o   o---o   o---o---o---o   o   o
            |   |   |       |           |       |               |       |   |
            o   o   o---o   o   o---o---o   o---o---o   o---o   o---o   o   o
            |   |   |       |   |           |                   |       |   |
            o   o   o---o   o   o---o   o---o   o---o---o---o   o---o   o   o
            |   |   |           |       |           |                   |   |
            o   o   o---o   o---o   o---o   o---o   o   o---o---o---o---o   o
            |       |       |       |   |       |   |                   |   |
            o   o---o   o---o   o---o   o   o   o   o---o---o---o---o   o   o
            |   |       |       |       |       |   |                   |   |
            o   o   o---o   o---o---o   o---o---o   o---o---o   o---o---o   o
            |   |           |       |                                       |
            o   o   o---o---o   o---o---o---o---o---o---o---o   o---o---o---o
            |   |       |               |       |       |       |       |   |
            o   o   o   o   o   o---o---o   o   o   o   o   o   o   o---o   o
            |   |   |       |           |   |       |       |               |
            o   o   o---o---o   o---o---o   o---o---o---o---o   o---o   o---o
            |   |   |       |       |       |       |       |       |       |
            o   o   o   o---o---o   o   o---o   o   o   o   o   o   o---o   o
            |   |               |               |       |       |       |   |
            o   o   o---o---o   o   o   o---o---o---o---o---o---o---o   o   o
            |   |                   |   |                               |   |
            o   o   o   o---o---o---o   o   o---o---o---o---o---o---o---o   o
            |   |   |           |                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: '5x5', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o   o---o---o---o   o---o---o---o---o---o---o---o---o   o
            |       |                       |                               |
            o---o   o   o---o---o   o---o   o   o---o---o---o---o---o---o   o
            |       |                       |                           |   |
            o   o---o   o---o   o---o---o---o---o---o---o---o---o   o---o   o
            |       |   |       |                                   |   |   |
            o---o   o   o   o---o   o---o---o---o---o---o---o---o---o   o   o
            |       |       |   |   |                           |       |   |
            o   o---o   o   o   o   o   o---o---o---o   o   o   o   o   o   o
            |       |   |   |   |       |               |   |   |   |   |   |
            o---o   o   o---o   o---o   o   o   o---o   o   o   o   o   o   o
            |       |               |       |       |   |   |   |   |   |   |
            o   o---o   o---o---o---o---o---o---o---o   o   o   o   o   o   o
            |       |                   |       |       |       |   |   |   |
            o   o   o   o---o---o---o   o   o   o---o   o---o   o   o   o   o
            |   |   |   |       |       |       |           |   |   |   |   |
            o   o   o   o---o   o   o---o---o   o---o   o---o   o   o   o   o
            |   |   |       |       |               |       |       |   |   |
            o---o   o   o---o---o---o---o---o   o---o   o---o---o---o   o   o
            |       |   |       |       |           |   |               |   |
            o   o---o---o---o   o---o   o---o   o---o   o   o---o---o---o   o
            |   |               |       |           |   |                   |
            o   o---o---o   o   o   o---o---o   o---o   o   o---o---o---o   o
            |   |   |       |   |       |               |       |       |   |
            o   o   o   o   o---o---o   o---o   o---o   o   o---o   o   o   o
            |   |               |       |   |           |   |       |   |   |
            o   o   o---o---o---o---o---o   o---o---o---o---o   o---o   o   o
            |                   |   |       |       |           |       |   |
            o   o   o---o---o   o   o   o   o   o   o   o---o---o   o---o   o
            |   |                       |       |       |                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: '86', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                               |               |
            o   o---o---o---o---o---o---o   o---o   o   o   o   o   o   o   o
            |   |                   |   |   |       |   |   |   |   |   |   |
            o   o---o   o   o   o   o   o   o---o   o   o   o---o   o   o   o
            |   |   |   |   |   |   |   |   |       |   |           |   |   |
            o   o   o   o   o   o   o   o   o---o---o---o   o---o---o---o   o
            |   |   |   |   |   |   |   |                               |   |
            o   o   o   o   o   o   o   o   o---o---o---o   o---o---o   o   o
            |   |       |   |   |   |   |   |                           |   |
            o   o   o   o   o   o   o   o   o---o---o---o   o---o---o   o   o
            |   |   |   |               |   |                           |   |
            o   o   o   o   o   o   o   o   o   o---o---o   o---o---o   o   o
            |   |   |   |   |   |   |   |   |                           |   |
            o   o---o   o   o   o   o   o---o---o---o---o---o---o---o---o   o
            |               |   |   |   |       |                       |   |
            o   o---o   o   o   o   o   o   o   o---o---o---o---o---o   o   o
            |   |   |   |   |   |   |   |       |                           |
            o   o   o   o   o   o   o   o   o---o---o---o---o---o---o---o   o
            |   |   |   |   |   |   |   |   |                           |   |
            o   o   o   o   o   o   o   o   o---o---o---o   o---o---o   o   o
            |   |   |   |               |   |                           |   |
            o   o   o   o   o   o   o   o   o---o---o---o   o---o---o   o   o
            |   |       |   |   |   |   |   |                               |
            o   o   o   o   o   o   o   o   o---o---o---o   o---o---o   o   o
            |   |   |   |   |   |   |       |                           |   |
            o   o   o   o   o   o   o   o   o   o---o---o   o---o---o---o   o
            |   |   |   |   |   |   |   |           |   |           |   |   |
            o   o---o   o   o   o   o   o   o   o---o   o   o---o   o   o   o
            |   |                   |   |   |       |   |   |   |   |   |   |
            o   o   o---o---o---o---o---o---o---o---o   o---o   o   o   o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: '87-sin', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |   |                                                           |
            o   o   o   o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |   |   |   |       |                                   |   |
            o   o   o   o   o   o   o---o---o---o---o---o---o---o   o   o   o
            |   |   |   |   |   |                       |   |   |   |   |   |
            o   o   o   o   o   o   o---o---o---o---o   o   o   o   o   o   o
            |   |   |   |   |   |   |                   |   |   |   |   |   |
            o   o   o   o   o   o   o   o---o---o---o---o   o   o   o   o   o
            |       |   |   |   |   |                   |   |   |   |   |   |
            o   o   o   o   o   o   o   o---o   o---o   o   o   o   o   o   o
            |   |   |   |   |   |   |   |       |   |   |   |   |   |   |   |
            o   o   o   o   o   o   o   o---o---o   o   o   o   o   o   o   o
            |   |   |   |       |   |               |   |   |   |   |   |   |
            o   o   o   o   o   o   o   o---o---o   o   o   o   o   o   o   o
            |   |   |   |   |   |   |   |           |   |                   |
            o   o   o   o   o   o   o   o   o   o   o   o---o   o   o---o   o
            |       |   |   |   |   |   |       |   |   |       |       |   |
            o   o   o   o   o   o   o   o---o---o---o   o---o   o   o---o   o
            |   |   |       |   |   |                   |   |   |   |   |   |
            o   o   o   o   o   o   o   o---o---o---o   o   o   o   o   o   o
            |   |   |   |   |   |   |                           |       |   |
            o   o   o   o   o   o   o---o---o---o---o---o---o---o---o   o   o
            |   |   |   |   |   |                                   |   |   |
            o   o   o   o---o   o---o---o---o---o---o   o---o---o   o   o   o
            |       |                                               |   |   |
            o   o   o   o---o---o---o---o---o   o---o---o---o---o---o   o   o
            |   |   |                                                   |   |
            o   o   o   o---o---o---o---o---o---o---o---o---o---o---o   o   o
            |   |   |                                                   |   |
            o   o   o---o---o---o---o---o---o   o---o---o---o---o---o---o---o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: '88-us', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |               |       |   |       |           |               |
            o---o---o   o   o   o   o   o   o   o   o   o   o   o---o---o   o
            |           |       |       |   |   |   |   |           |       |
            o   o---o   o   o---o---o   o   o   o   o   o   o   o   o   o   o
            |       |   |           |   |   |   |   |   |   |   |   |   |   |
            o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o
            |   |   |   |   |   |           |           |   |   |       |   |
            o   o---o   o---o---o---o   o---o---o---o---o   o   o---o   o   o
            |       |       |   |       |                   |       |       |
            o   o   o---o   o   o   o---o   o   o   o   o---o---o   o---o---o
            |   |   |       |       |   |   |   |   |           |           |
            o---o   o   o---o   o---o   o   o   o   o   o---o---o---o---o   o
            |       |                   |       |   |           |           |
            o   o---o---o---o---o---o---o---o---o---o---o---o   o   o---o   o
            |                       |           |               |       |   |
            o   o---o---o---o---o---o   o   o   o   o---o---o   o---o   o---o
            |   |                   |   |       |                   |       |
            o   o   o---o---o---o   o   o---o---o---o---o   o   o   o   o---o
            |   |   |               |   |   |       |   |   |   |   |   |   |
            o   o   o---o---o---o   o   o   o   o   o   o   o---o---o   o   o
            |   |               |       |       |       |           |   |   |
            o   o   o---o   o---o---o---o   o---o   o   o   o---o   o   o   o
            |   |   |                               |       |       |   |   |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o   o   o   o
            |   |               |           |   |               |   |       |
            o   o---o---o   o   o   o---o   o   o   o---o---o   o---o---o   o
            |           |   |       |   |       |                   |   |   |
            o   o---o   o   o---o---o   o   o---o---o---o---o---o   o   o   o
            |   |   |   |       |               |                   |       |
            o   o   o   o   o   o   o---o---o   o---o---o   o   o---o---o   o
            |   |           |               |               |               |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: '90-tor', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |               |                                               |
            o   o---o---o---o   o---o---o   o---o---o   o---o---o   o   o   o
            |   |   |       |   |   |           |           |       |   |   |
            o   o   o   o   o   o   o   o   o---o---o   o---o   o---o   o   o
            |       |   |   |           |                           |   |   |
            o   o   o   o   o   o   o   o   o---o---o   o---o---o---o   o   o
            |   |   |   |       |   |   |   |   |       |   |       |   |   |
            o   o   o   o   o   o   o---o---o   o   o   o   o---o   o   o   o
            |   |   |   |   |   |                   |               |   |   |
            o   o   o   o   o---o---o---o---o---o---o   o---o---o   o   o   o
            |   |   |   |   |   |               |   |   |   |   |   |   |   |
            o   o   o   o   o   o   o---o---o   o   o   o   o   o   o   o   o
            |   |   |   |   |   |                   |   |   |       |   |   |
            o   o   o   o   o   o   o---o---o---o   o   o   o   o   o   o   o
            |   |   |   |   |   |       |           |   |   |   |   |   |   |
            o   o   o   o   o   o---o   o   o   o---o---o   o   o   o   o---o
            |   |   |   |   |   |       |       |       |   |   |   |       |
            o   o   o   o   o   o   o---o---o---o   o   o   o   o   o---o   o
            |   |   |   |   |   |       |           |   |   |   |   |       |
            o   o   o   o   o   o---o   o   o---o---o---o   o   o   o   o   o
            |   |   |   |   |   |       |                   |   |       |   |
            o   o   o   o   o   o   o---o---o---o---o---o   o   o   o   o   o
            |   |           |   |   |   |                   |   |   |   |   |
            o   o   o   o   o   o   o   o   o---o---o---o---o   o   o   o   o
            |   |   |   |   |   |                               |   |   |   |
            o   o---o---o   o   o---o---o---o---o---o---o---o---o---o   o   o
            |       |   |                                               |   |
            o   o   o   o---o---o---o---o---o---o---o---o---o---o---o   o   o
            |   |                   |       |       |                   |   |
            o   o---o---o---o---o   o   o   o   o   o---o---o---o---o---o   o
            |   |                       |       |                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: '92-bos', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                       |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o   o   o
            |   |   |                                               |   |   |
            o   o   o   o---o---o---o---o   o---o   o---o---o---o   o   o   o
            |   |   |   |   |           |       |       |       |   |   |   |
            o   o   o   o   o   o---o   o   o---o   o---o   o   o   o   o   o
            |   |   |       |   |       |   |       |       |   |   |   |   |
            o   o   o---o   o   o   o---o   o   o---o   o---o   o   o   o   o
            |   |   |   |   |   |           |   |       |       |   |   |   |
            o   o   o   o   o   o---o---o   o   o   o---o   o---o   o   o   o
            |   |   |       |   |       |   |       |       |   |   |   |   |
            o   o   o   o---o   o   o   o---o---o---o   o---o   o   o   o   o
            |   |   |   |   |   |   |   |       |       |       |   |   |   |
            o   o   o   o   o   o   o   o   o   o   o---o   o   o   o   o   o
            |   |   |       |   |   |   |       |           |   |   |   |   |
            o   o   o   o---o   o   o   o---o   o   o---o   o   o   o   o   o
            |                   |   |           |   |           |   |   |   |
            o   o---o   o---o   o   o---o---o   o---o   o---o---o   o   o   o
            |   |               |           |   |       |       |   |   |   |
            o   o   o---o   o---o---o---o   o   o   o---o   o   o   o   o   o
            |                           |   |   |           |   |   |   |   |
            o   o---o   o---o   o---o   o   o   o---o---o---o   o   o   o   o
            |                           |   |                   |   |   |   |
            o   o---o   o---o   o---o   o   o---o---o---o---o---o   o   o   o
            |                           |   |                       |   |   |
            o   o   o---o   o---o   o   o   o---o---o---o---o---o---o   o   o
            |   |                   |   |                               |   |
            o   o---o   o---o   o---o   o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'a-maze', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                           |   |
            o   o---o---o---o---o---o---o---o---o---o   o   o   o   o   o   o
            |   |                                   |   |   |   |   |       |
            o   o   o---o---o---o---o---o---o---o   o   o---o   o---o   o---o
            |   |                           |   |   |   |           |       |
            o   o---o---o---o   o---o---o---o   o   o   o   o---o   o---o   o
            |                               |       |   |               |   |
            o   o---o---o---o---o---o---o   o   o   o   o   o   o---o   o   o
            |                           |   |   |       |       |   |   |   |
            o---o---o---o---o---o---o   o   o   o   o---o---o---o   o---o   o
            |                           |   |   |                           |
            o---o   o---o---o---o---o---o---o   o---o   o---o---o---o---o   o
            |                       |       |                           |   |
            o---o---o   o---o---o---o   o---o   o   o---o---o---o---o   o   o
            |           |           |   |       |                   |   |   |
            o---o   o---o   o---o   o   o   o   o---o---o---o---o---o   o   o
            |       |       |       |   |       |   |               |   |   |
            o   o---o   o---o   o---o   o---o---o   o---o---o   o   o   o   o
            |   |       |       |                   |       |   |       |   |
            o   o   o---o   o---o   o   o---o---o---o   o   o   o   o   o   o
            |       |       |   |   |   |       |   |   |   |   |   |   |   |
            o   o---o   o---o   o   o---o   o   o   o   o   o   o   o   o   o
            |   |       |           |       |   |   |   |   |   |   |   |   |
            o---o   o---o---o---o---o   o---o   o   o   o   o   o   o   o   o
            |       |           |       |       |   |   |   |   |   |   |   |
            o   o---o   o   o---o   o---o   o---o   o   o   o   o   o   o   o
            |           |   |       |       |       |   |   |   |   |   |   |
            o   o---o   o   o   o---o   o---o   o   o   o   o   o   o   o   o
            |   |   |   |   |   |       |       |       |   |   |       |   |
            o   o   o   o   o---o   o---o   o   o   o   o   o   o---o---o   o
            |   |       |               |   |   |   |   |                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'all-america-2013', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o---o   o   o   o---o   o---o   o---o---o   o---o   o---o---o   o
            |       |   |   |   |   |   |   |   |   |   |                   |
            o   o   o   o   o---o   o---o   o   o   o   o   o---o---o---o   o
            |   |   |   |   |   |   |   |   |   |   |   |                   |
            o   o   o   o   o   o   o   o   o   o   o   o---o   o---o---o   o
            |       |                                                       |
            o   o   o   o---o---o---o---o---o   o   o---o---o---o---o---o   o
            |   |   |                       |   |   |                       |
            o   o   o   o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |       |   |           |                           |           |
            o   o   o   o   o---o   o---o---o---o---o   o---o   o   o   o   o
            |   |   |   |       |   |                   |   |   |   |   |   |
            o   o   o   o---o   o   o   o---o---o---o   o   o   o   o   o   o
            |       |   |       |   |   |                   |   |   |   |   |
            o   o   o   o   o---o   o   o   o   o---o---o   o   o   o   o   o
            |   |   |   |       |       |       |           |           |   |
            o   o   o   o---o   o---o---o---o---o---o---o   o---o   o---o   o
            |       |           |                           |           |   |
            o   o   o   o---o---o---o---o---o---o   o---o---o---o   o---o   o
            |   |   |       |                       |                       |
            o   o   o   o---o   o---o---o---o   o---o   o---o---o---o---o---o
            |       |       |   |                   |   |                   |
            o   o   o   o---o   o   o---o---o   o---o   o   o---o---o---o   o
            |   |   |       |   |       |       |       |   |               |
            o   o   o   o---o   o   o---o   o---o---o   o   o   o---o---o---o
            |   |   |       |   |   |       |           |   |   |           |
            o   o   o   o---o   o   o   o---o---o---o   o   o   o   o---o   o
            |   |   |                                       |       |       |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o   o---o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'apec-1988', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |           |                       |       |       |           |
            o   o---o   o   o---o---o---o---o   o   o   o   o   o   o---o   o
            |       |       |       |       |   |   |   |   |           |   |
            o   o   o   o   o   o---o   o   o---o   o   o   o   o---o   o   o
            |   |   |   |   |           |           |   |   |           |   |
            o   o   o   o   o   o---o---o---o---o---o   o   o---o---o   o   o
            |   |   |   |   |               |               |           |   |
            o   o   o   o   o   o---o---o   o---o---o   o---o   o---o---o   o
            |   |   |           |                   |   |               |   |
            o   o---o---o   o---o   o---o---o---o---o   o---o---o---o   o   o
            |           |   |                           |                   |
            o   o---o---o   o---o---o---o---o---o---o---o   o---o---o   o---o
            |           |           |                                   |   |
            o   o   o   o---o   o   o   o---o---o   o---o---o   o---o---o   o
            |   |   |       |   |   |   |       |   |           |   |       |
            o   o   o---o   o---o   o   o   o   o   o---o---o---o   o   o   o
            |       |       |       |           |           |       |   |   |
            o   o   o   o---o   o   o   o---o---o   o---o   o---o   o   o   o
            |   |       |       |   |               |       |           |   |
            o   o   o   o   o---o---o---o---o---o---o   o---o---o   o---o   o
            |   |   |       |   |       |       |   |   |               |   |
            o   o---o---o---o   o   o   o   o---o   o   o---o   o---o   o   o
            |   |       |           |           |   |       |       |   |   |
            o   o   o   o   o---o   o   o---o   o   o---o   o---o   o   o   o
            |       |       |       |   |       |   |   |       |   |   |   |
            o   o---o---o---o---o   o   o   o---o   o   o---o   o   o   o   o
            |       |                   |       |           |           |   |
            o   o   o   o   o---o---o---o---o   o---o---o   o---o---o---o   o
            |   |   |   |           |           |               |           |
            o   o   o   o   o---o   o   o---o   o   o---o---o   o   o---o   o
            |   |       |           |                   |                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'apec-1998', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                       |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o   o---o   o
            |   |   |               |           |       |       |       |   |
            o   o   o   o---o   o---o   o---o   o   o   o   o   o---o   o   o
            |   |   |   |       |           |   |   |       |   |       |   |
            o   o   o   o   o---o---o   o---o   o   o---o---o   o   o---o   o
            |   |       |       |       |       |   |           |       |   |
            o   o---o---o   o---o   o---o   o---o   o   o---o---o---o   o   o
            |       |       |           |           |   |               |   |
            o   o---o   o---o---o   o---o---o---o---o   o   o---o---o---o   o
            |   |           |       |                   |       |           |
            o   o---o   o---o   o---o   o---o---o   o---o   o---o   o---o   o
            |   |       |           |           |   |       |           |   |
            o   o   o---o---o   o---o---o   o   o   o---o   o---o   o---o   o
            |   |       |               |       |   |       |       |       |
            o   o---o   o---o---o---o   o---o---o   o   o---o   o---o   o   o
            |   |           |               |       |   |           |   |   |
            o   o---o   o---o---o   o   o---o---o   o   o---o   o---o   o   o
            |   |   |           |   |           |       |       |       |   |
            o   o   o---o---o   o---o---o---o   o---o---o   o---o   o---o   o
            |   |       |           |               |           |       |   |
            o   o   o---o---o   o---o---o   o   o---o---o   o---o---o   o   o
            |   |           |           |   |       |       |           |   |
            o   o---o   o---o---o---o   o---o---o   o   o---o   o---o---o   o
            |       |           |           |           |               |   |
            o   o   o---o---o   o---o   o---o---o---o---o---o---o---o---o---o
            |   |                   |                                       |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'apec-2009', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o   o---o   o
            |   |                                   |       |           |   |
            o   o   o---o   o---o---o---o---o---o   o   o   o---o---o   o   o
            |   |       |                       |       |   |           |   |
            o   o---o   o   o---o---o---o   o---o---o---o   o   o---o---o   o
            |   |               |       |           |       |           |   |
            o   o   o---o   o---o   o   o---o---o   o   o---o---o---o   o   o
            |   |   |       |       |           |   |       |           |   |
            o   o   o---o---o   o---o   o   o---o   o---o   o---o   o---o   o
            |   |       |           |   |       |       |       |       |   |
            o   o---o   o   o---o   o---o---o   o---o   o---o   o---o   o   o
            |   |   |   |   |   |   |               |       |       |   |   |
            o   o   o   o   o   o---o   o---o---o   o---o   o---o   o   o   o
            |   |       |           |   |           |           |   |   |   |
            o   o   o   o---o   o   o   o   o   o   o---o   o---o   o   o   o
            |   |   |   |   |   |   |   |       |   |   |       |       |   |
            o   o---o   o   o---o   o   o---o---o   o   o---o   o---o---o   o
            |   |   |           |   |   |           |       |           |   |
            o   o   o---o---o   o   o---o---o---o---o   o   o---o---o   o   o
            |   |               |                   |   |               |   |
            o   o   o---o---o---o---o---o   o---o   o   o---o---o---o---o   o
            |   |       |       |   |           |   |                   |   |
            o   o   o---o   o   o   o---o---o   o---o---o---o---o---o   o   o
            |   |           |           |           |                   |   |
            o   o---o---o---o---o   o---o---o---o   o   o---o---o---o---o   o
            |       |                   |       |       |       |       |   |
            o   o   o   o---o---o---o---o   o   o---o---o   o   o   o   o   o
            |   |   |                       |               |       |       |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'apec-2010', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o---o
            |   |           |           |           |                       |
            o   o   o---o   o   o---o   o---o   o   o---o   o---o---o   o   o
            |   |       |   |   |           |   |       |           |   |   |
            o   o---o   o   o   o---o   o   o   o---o   o---o   o---o---o---o
            |   |       |   |       |   |   |   |               |       |   |
            o   o   o---o   o---o   o---o   o   o---o   o---o---o---o   o   o
            |   |   |               |       |       |   |       |           |
            o   o   o---o---o---o---o   o---o---o   o---o   o   o   o   o   o
            |   |           |       |                   |   |       |   |   |
            o   o---o---o   o   o   o---o---o---o---o---o   o---o---o---o   o
            |   |   |   |       |   |               |       |           |   |
            o   o   o   o---o---o   o   o---o---o   o   o---o   o---o   o   o
            |   |           |   |   |   |       |   |   |       |       |   |
            o   o   o   o---o   o   o   o   o   o   o   o   o---o   o---o   o
            |   |   |   |           |   |       |   |   |   |           |   |
            o   o   o   o   o---o---o   o   o---o   o   o   o   o   o---o   o
            |   |   |       |       |           |   |       |   |   |   |   |
            o   o   o---o---o   o   o   o---o---o   o---o---o   o---o   o   o
            |   |   |       |   |       |       |           |           |   |
            o   o   o   o   o   o---o---o   o   o---o---o   o---o---o   o   o
            |   |   |   |           |       |                   |   |   |   |
            o   o   o   o   o   o---o   o---o---o---o---o   o---o   o   o   o
            |   |       |   |   |       |           |   |   |   |   |   |   |
            o   o---o---o---o---o---o   o   o---o   o   o---o   o   o   o   o
            |       |                   |       |           |           |   |
            o   o   o   o---o---o---o---o---o   o---o   o   o   o   o   o   o
            |   |   |                               |   |       |   |   |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'apec-2011', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o   o   o
            |   |       |                                               |   |
            o   o   o   o---o   o---o---o---o---o---o---o---o---o   o---o   o
            |   |   |       |       |                           |       |   |
            o   o   o---o   o---o   o   o   o---o   o---o   o   o---o   o   o
            |   |   |           |   |   |       |   |       |   |       |   |
            o   o   o---o   o---o   o   o   o---o   o---o   o   o   o   o   o
            |   |   |       |       |   |   |           |   |   |   |   |   |
            o   o   o   o---o   o---o   o   o---o   o---o   o   o---o   o   o
            |   |   |   |       |   |   |                   |   |       |   |
            o   o   o   o   o---o   o   o---o---o   o---o---o   o---o   o   o
            |   |   |       |           |               |       |       |   |
            o   o   o   o---o   o   o---o   o   o---o   o   o---o   o---o   o
            |   |   |   |       |   |   |       |   |   |   |           |   |
            o   o   o---o   o---o---o   o---o---o   o---o   o   o   o---o   o
            |   |   |       |               |               |   |   |   |   |
            o   o   o   o---o   o---o   o---o---o   o---o---o   o---o   o   o
            |   |   |       |   |       |       |           |           |   |
            o   o   o   o---o   o   o   o   o   o---o---o   o---o---o   o   o
            |   |   |   |       |   |       |                   |   |   |   |
            o   o   o   o   o---o   o---o---o---o---o---o   o---o   o   o   o
            |   |   |       |           |           |   |   |       |   |   |
            o   o   o---o---o---o---o   o   o---o   o   o---o   o   o   o   o
            |       |                   |       |   |       |   |   |   |   |
            o   o   o   o---o---o---o---o---o   o   o   o   o   o   o   o   o
            |   |   |                           |       |       |       |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'apec-2012', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |               |                                           |
            o   o   o---o---o---o   o---o---o---o---o---o---o---o---o---o   o
            |   |   |           |       |       |       |               |   |
            o   o   o   o---o   o---o   o   o   o   o   o   o---o---o   o   o
            |   |   |   |   |       |       |       |   |       |       |   |
            o   o   o   o   o---o   o---o---o---o---o   o---o   o   o---o   o
            |   |   |           |   |       |       |   |       |       |   |
            o   o   o---o   o---o   o   o   o   o   o   o   o---o---o   o   o
            |   |   |       |       |   |       |       |   |   |       |   |
            o   o   o   o---o   o---o   o---o---o---o---o   o   o   o---o   o
            |   |   |   |       |   |                       |           |   |
            o   o   o   o   o---o   o   o---o---o---o---o---o   o   o---o   o
            |   |   |   |   |       |   |       |               |   |       |
            o   o   o   o   o   o   o---o   o   o   o---o---o---o---o   o   o
            |   |   |   |       |       |       |           |           |   |
            o   o   o   o   o---o---o   o---o   o---o---o   o   o   o---o   o
            |   |   |   |   |           |               |   |   |   |   |   |
            o   o   o   o---o   o---o---o---o---o   o---o   o   o---o   o   o
            |   |   |   |       |   |           |       |   |           |   |
            o   o   o   o   o---o   o   o---o   o---o   o   o---o---o   o   o
            |   |   |   |           |       |   |       |           |   |   |
            o   o   o   o---o---o   o   o---o   o   o   o---o---o   o   o   o
            |   |   |   |           |       |       |   |       |   |   |   |
            o   o   o   o   o---o---o---o   o   o---o---o   o   o   o   o   o
            |       |   |                   |               |       |   |   |
            o   o   o   o---o---o---o---o---o---o---o---o---o---o---o   o   o
            |   |   |                                                   |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'apec-2013', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o   o   o---o---o---o---o---o---o---o---o   o---o---o---o---o   o
            |   |   |                           |                       |   |
            o   o   o   o---o---o---o   o---o---o---o---o   o---o---o   o   o
            |   |   |   |   |       |           |   |       |           |   |
            o   o   o   o   o   o   o---o---o   o   o   o---o   o---o---o   o
            |   |   |   |       |   |       |       |   |               |   |
            o   o   o   o   o---o   o   o   o---o   o   o---o---o---o   o   o
            |   |   |   |       |   |   |       |       |               |   |
            o   o   o   o---o   o   o   o---o   o---o---o   o---o---o---o   o
            |   |   |           |   |   |               |           |   |   |
            o   o   o---o---o   o   o   o---o---o---o   o---o---o   o   o   o
            |   |   |       |   |   |   |           |               |   |   |
            o   o   o   o   o---o   o   o   o   o   o---o---o---o---o   o   o
            |   |   |   |       |   |   |       |           |           |   |
            o   o   o   o---o   o   o   o---o---o---o   o---o   o   o   o   o
            |   |   |   |       |       |           |       |   |   |   |   |
            o   o   o   o   o---o   o---o---o   o   o---o   o   o---o   o   o
            |   |   |   |           |       |   |       |               |   |
            o   o   o   o---o---o---o   o   o   o---o   o---o   o---o   o   o
            |   |   |               |   |   |       |       |       |   |   |
            o   o   o---o---o---o   o   o   o---o   o---o   o---o   o   o   o
            |   |   |               |   |   |           |       |       |   |
            o   o   o   o---o---o---o   o   o---o---o   o---o   o---o   o   o
            |       |   |               |   |               |       |   |   |
            o   o   o   o---o---o---o   o   o---o---o---o   o---o   o   o   o
            |   |   |                   |                   |           |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'apec-2014', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o   o
            |   |       |               |                               |   |
            o   o   o   o   o---o---o   o---o   o---o---o---o---o---o---o   o
            |   |   |   |       |           |           |               |   |
            o   o   o   o---o   o---o---o   o   o---o   o---o   o---o   o   o
            |   |   |   |   |           |   |   |           |       |   |   |
            o   o   o   o   o---o---o   o   o---o---o   o---o---o   o   o   o
            |   |   |               |   |           |           |   |   |   |
            o   o   o---o---o---o   o   o---o   o---o---o---o   o   o   o   o
            |   |       |   |       |       |           |   |   |   |   |   |
            o   o---o   o   o   o---o   o   o---o   o---o   o   o   o   o   o
            |   |   |       |       |   |       |           |   |   |   |   |
            o   o   o---o   o---o   o   o---o   o   o   o---o   o   o   o   o
            |   |       |       |       |       |   |       |       |   |   |
            o   o   o   o---o   o---o   o   o   o   o   o   o---o---o   o   o
            |   |   |   |           |   |       |   |   |           |   |   |
            o   o   o   o---o---o   o---o---o---o   o   o   o   o   o   o   o
            |   |   |   |       |           |       |       |   |   |   |   |
            o   o   o   o   o   o---o   o---o---o---o---o---o---o   o   o   o
            |   |   |   |   |       |       |           |   |       |   |   |
            o   o   o   o   o---o   o---o   o   o   o---o   o---o   o   o   o
            |   |   |   |   |       |           |   |           |       |   |
            o   o   o   o   o   o---o---o---o---o   o---o   o   o---o   o   o
            |   |   |   |   |                       |       |   |   |   |   |
            o   o   o   o   o---o---o---o---o---o---o   o---o   o   o---o   o
            |       |   |                                   |           |   |
            o   o   o   o---o---o---o---o---o---o---o---o---o---o---o   o   o
            |   |   |                                                   |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'apec-2016', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |   |               |       |       |                   |   |
            o   o   o   o---o   o---o   o   o   o   o   o---o---o---o   o   o
            |   |   |   |   |           |   |   |   |   |       |       |   |
            o   o   o   o   o---o---o---o   o   o   o   o---o   o   o---o   o
            |   |   |   |                   |   |   |   |           |       |
            o   o   o   o   o---o---o---o   o   o   o   o---o   o---o   o   o
            |   |   |   |   |       |   |   |   |       |       |   |   |   |
            o   o   o   o   o   o   o   o---o   o---o---o   o---o   o   o   o
            |   |   |   |       |   |           |               |       |   |
            o   o   o   o---o---o   o   o---o---o---o   o---o---o   o   o   o
            |   |   |   |           |   |       |           |   |   |   |   |
            o   o   o   o   o   o---o   o   o   o   o---o---o   o   o   o   o
            |   |   |   |   |   |       |                   |       |   |   |
            o   o   o   o   o---o   o   o---o---o---o---o   o   o   o   o   o
            |   |   |   |   |       |   |               |   |   |   |   |   |
            o   o   o   o   o   o---o---o---o---o   o   o   o   o---o---o   o
            |   |   |   |   |       |               |   |   |           |   |
            o   o   o   o   o   o   o   o---o   o---o   o   o---o---o   o   o
            |   |   |   |       |   |               |   |           |   |   |
            o   o   o   o---o---o   o---o   o---o   o   o---o---o   o   o   o
            |   |       |           |               |   |       |   |   |   |
            o   o---o   o   o---o---o   o---o   o---o   o   o   o   o   o   o
            |       |   |                           |       |       |   |   |
            o   o   o   o---o---o---o---o---o---o---o---o---o---o---o   o   o
            |   |   |                                                   |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'apec-2017', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o   o   o
            |   |               |       |               |           |   |   |
            o   o   o---o---o   o   o   o   o---o---o   o   o---o   o   o   o
            |   |   |           |   |       |       |   |       |   |   |   |
            o   o   o   o   o---o   o---o---o   o   o   o---o   o   o   o   o
            |   |   |   |   |       |   |       |   |   |       |   |   |   |
            o   o   o   o---o   o---o   o   o---o   o   o   o---o   o   o   o
            |   |   |   |       |   |           |   |   |       |   |   |   |
            o   o   o   o   o---o   o   o---o   o   o   o---o   o   o   o   o
            |   |   |   |   |   |               |       |       |   |   |   |
            o   o   o   o   o   o   o---o---o---o---o---o---o   o   o   o   o
            |   |   |       |           |       |               |   |   |   |
            o   o   o---o---o   o---o   o   o   o   o---o   o   o   o   o   o
            |   |   |                   |       |           |   |   |   |   |
            o   o   o   o---o---o---o---o---o   o---o   o   o---o   o   o   o
            |   |   |       |                   |       |   |       |   |   |
            o   o   o---o   o   o---o   o---o---o   o   o---o   o---o   o   o
            |   |   |       |       |   |           |   |       |   |   |   |
            o   o   o   o---o   o   o---o---o   o   o---o   o---o   o   o   o
            |   |   |       |   |   |   |       |   |       |       |   |   |
            o   o   o---o   o   o---o   o   o---o---o   o---o   o   o   o   o
            |   |       |       |       |       |       |       |   |   |   |
            o   o---o   o   o---o   o   o---o   o   o---o   o---o   o   o   o
            |       |   |           |           |           |       |   |   |
            o   o   o   o---o---o---o---o---o---o---o---o---o---o   o   o   o
            |   |   |                                                   |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'apec-2018', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |   |                                                       |
            o   o   o   o   o---o---o   o---o---o---o---o---o---o---o---o   o
            |   |   |   |           |               |   |       |           |
            o   o   o   o---o---o   o---o---o---o   o   o   o   o   o   o   o
            |   |   |               |               |   |   |   |   |   |   |
            o   o   o   o---o   o---o   o---o---o---o   o   o   o   o---o   o
            |   |   |   |           |                   |   |   |       |   |
            o   o   o   o   o   o---o---o---o---o---o   o   o   o---o   o   o
            |   |   |   |   |   |   |               |   |   |   |       |   |
            o   o   o   o   o---o   o   o---o---o   o   o   o   o   o---o   o
            |   |   |   |       |   |   |       |   |   |   |   |       |   |
            o   o   o   o---o   o   o   o   o   o   o   o   o   o---o   o   o
            |   |   |   |           |           |   |       |       |   |   |
            o   o   o   o   o---o   o   o---o---o   o   o   o---o   o   o   o
            |   |   |   |   |       |               |   |       |       |   |
            o   o   o   o---o   o   o---o---o   o---o---o   o   o---o   o   o
            |   |   |   |       |   |   |       |       |   |       |   |   |
            o   o   o   o   o   o---o   o   o---o   o   o---o---o   o---o   o
            |   |   |   |   |   |   |       |       |   |               |   |
            o   o   o   o   o---o   o   o---o   o---o   o---o---o---o   o   o
            |   |   |   |           |               |   |       |       |   |
            o   o   o   o---o   o---o---o---o---o---o   o   o   o   o   o   o
            |       |   |                                   |       |   |   |
            o   o   o   o---o---o---o---o---o---o---o---o---o---o---o   o   o
            |   |   |                                                   |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'at-135', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |           |                                                   |
            o   o---o   o   o---o---o---o---o---o---o---o---o---o---o   o   o
            |   |   |       |   |   |   |   |       |       |       |   |   |
            o   o   o---o---o   o   o   o   o   o   o   o   o   o   o   o   o
            |   |       |                       |       |       |       |   |
            o   o---o   o   o---o   o   o   o   o---o---o---o---o---o---o   o
            |   |       |   |   |   |   |   |   |           |       |   |   |
            o   o   o   o   o   o---o   o---o---o   o---o---o   o   o   o   o
            |   |   |       |       |   |       |               |       |   |
            o---o---o---o---o---o---o---o---o---o   o---o---o---o---o   o   o
            |                                   |       |               |   |
            o   o---o---o---o---o---o---o---o   o   o---o   o---o---o---o   o
            |   |                           |   |       |               |   |
            o   o---o---o   o---o---o---o---o   o   o---o   o---o---o   o   o
            |           |   |           |       |   |                   |   |
            o   o---o---o   o   o---o   o   o   o---o   o---o---o---o   o   o
            |   |           |   |       |       |   |   |           |   |   |
            o   o---o---o   o   o---o   o---o---o   o---o   o---o---o   o   o
            |       |                   |   |   |           |           |   |
            o   o   o   o---o---o---o---o   o   o---o---o   o---o---o   o   o
            |   |   |                       |           |           |   |   |
            o   o---o   o   o---o---o---o---o   o---o---o---o   o   o   o   o
            |           |               |                   |   |   |   |   |
            o---o---o   o   o   o---o---o   o---o---o---o---o   o   o   o   o
            |       |   |   |           |               |   |       |   |   |
            o   o   o   o   o   o---o---o   o---o---o---o   o---o   o   o   o
            |   |           |           |   |   |               |       |   |
            o   o   o---o---o---o---o---o   o   o---o---o   o   o---o   o   o
            |   |   |                   |       |       |   |       |   |   |
            o   o   o   o---o---o   o   o---o---o   o   o   o   o---o---o   o
            |   |                   |               |                       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'beam-94', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |       |   |   |       |       |       |               |       |
            o   o---o   o   o   o   o   o   o   o   o---o---o---o   o---o   o
            |           |       |       |       |           |       |   |   |
            o   o---o   o   o---o---o---o---o---o---o   o   o   o   o   o   o
            |       |       |           |       |       |   |   |           |
            o   o---o---o   o---o   o---o   o   o   o---o   o   o   o   o---o
            |       |                   |   |           |       |   |       |
            o   o---o---o---o   o---o   o   o   o---o---o   o---o   o   o---o
            |                       |       |       |       |       |       |
            o---o   o---o   o---o   o---o---o   o---o   o---o---o   o   o   o
            |       |       |       |           |   |       |       |   |   |
            o---o   o---o---o---o---o   o---o---o   o---o   o   o---o   o   o
            |   |       |               |       |                           |
            o   o   o---o   o---o---o---o---o   o   o---o---o   o   o---o---o
            |       |   |       |   |       |               |   |           |
            o   o   o   o   o   o---o   o   o   o---o---o---o   o   o---o   o
            |   |   |       |   |   |               |       |   |   |       |
            o   o---o---o   o   o   o---o---o   o   o   o   o   o---o---o   o
            |                   |   |           |   |   |               |   |
            o   o---o   o   o---o   o---o---o---o---o---o   o---o---o   o   o
            |   |       |       |   |           |       |   |           |   |
            o   o   o---o---o   o   o---o---o---o---o---o   o---o---o---o   o
            |           |       |   |   |               |   |   |           |
            o   o---o   o   o---o   o   o   o---o---o   o   o   o---o   o---o
            |       |   |       |   |   |       |       |   |   |           |
            o   o---o   o---o   o   o   o---o   o   o---o   o   o   o---o   o
            |           |       |   |   |       |   |       |           |   |
            o   o---o   o   o---o   o   o   o   o   o---o---o   o---o   o   o
            |       |           |   |       |   |                   |       |
            o   o   o---o---o---o---o   o---o   o   o---o   o---o---o   o---o
            |   |                       |           |       |               |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'bon-13', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |   |               |       |                                   |
            o   o---o   o---o   o   o   o   o---o   o---o---o---o---o---o   o
            |   |           |       |       |       |               |       |
            o   o---o   o---o---o---o   o---o   o   o   o---o   o   o---o   o
            |   |                   |   |       |   |           |           |
            o   o---o   o---o---o   o---o   o---o   o   o---o   o   o---o   o
            |   |               |   |       |   |   |               |       |
            o   o---o   o---o   o---o   o   o   o   o   o---o---o---o---o   o
            |   |           |   |       |   |   |   |   |           |       |
            o   o   o---o---o---o   o---o---o   o   o   o   o---o   o---o   o
            |               |       |           |   |   |                   |
            o   o---o---o---o   o---o   o---o   o---o   o---o---o---o---o   o
            |           |           |   |           |                   |   |
            o---o---o   o   o---o   o   o---o---o   o   o---o---o---o---o   o
            |           |           |   |       |                           |
            o   o---o---o   o---o---o   o   o   o---o---o---o---o---o---o   o
            |           |           |   |           |                   |   |
            o   o---o   o   o---o   o   o---o---o   o   o---o---o---o---o   o
            |   |       |           |           |   |   |                   |
            o   o   o---o---o   o---o   o---o   o   o   o   o---o---o---o---o
            |   |           |       |       |   |   |   |                   |
            o   o   o---o---o---o   o---o   o---o   o   o---o---o---o   o---o
            |   |           |   |       |       |   |               |       |
            o   o---o   o---o   o---o   o---o   o   o   o---o---o---o---o   o
            |   |               |   |       |       |   |                   |
            o   o---o   o---o---o   o---o   o---o---o   o---o   o---o---o---o
            |   |                   |   |                   |               |
            o   o---o   o---o---o---o   o---o   o---o   o   o---o   o---o   o
            |   |           |       |       |       |   |       |       |   |
            o   o---o   o---o   o   o   o   o---o   o   o---o   o---o   o---o
            |   |               |       |           |       |               |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'boston', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |       |                                                       |
            o   o   o   o---o---o---o---o---o   o   o---o---o---o---o   o   o
            |   |   |       |               |   |                   |   |   |
            o   o   o---o   o   o---o---o---o   o   o---o---o---o   o   o   o
            |   |           |                   |   |               |   |   |
            o   o---o   o---o---o---o---o---o---o   o---o---o---o   o   o   o
            |   |       |                                           |   |   |
            o   o   o   o   o---o   o---o---o---o---o---o---o---o---o   o   o
            |   |   |       |   |                               |       |   |
            o   o   o---o   o   o   o---o---o---o---o---o   o   o   o   o   o
            |   |       |       |                       |   |   |   |   |   |
            o   o---o   o   o   o   o---o   o---o---o   o   o   o---o   o   o
            |           |   |   |   |       |       |       |           |   |
            o   o   o---o   o   o   o   o---o   o   o---o   o   o---o---o   o
            |   |       |   |   |   |   |       |       |   |       |       |
            o   o---o   o   o   o   o   o   o   o---o   o   o---o   o   o   o
            |   |       |   |   |   |   |       |       |       |   |   |   |
            o   o   o   o   o   o   o   o---o---o   o---o---o   o   o   o   o
            |   |   |   |       |   |           |       |       |   |   |   |
            o   o   o   o---o---o   o---o---o   o---o   o   o---o   o   o   o
            |   |   |   |                   |       |       |       |   |   |
            o   o   o   o---o---o---o---o   o---o   o   o---o   o   o   o   o
            |   |   |           |       |       |       |       |   |   |   |
            o   o   o   o---o   o   o   o---o   o---o   o   o---o   o   o   o
            |       |       |   |   |       |                       |   |   |
            o---o   o---o---o   o   o---o   o---o   o---o---o---o---o   o   o
            |       |           |       |       |                       |   |
            o   o   o---o---o   o---o   o---o   o---o---o---o---o---o   o   o
            |   |               |   |       |                           |   |
            o   o   o---o---o---o   o---o   o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'bug', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o   o---o---o---o   o---o---o---o---o---o---o---o---o   o
            |       |                       |                               |
            o---o   o   o---o---o   o---o   o   o---o---o---o---o---o---o   o
            |       |                       |                           |   |
            o   o---o   o---o   o---o---o---o---o---o---o---o---o   o---o   o
            |       |   |       |                                   |   |   |
            o---o   o   o   o---o   o---o---o---o---o---o---o---o---o   o   o
            |       |       |   |   |                           |       |   |
            o   o---o   o   o   o   o   o---o---o---o   o   o   o   o   o   o
            |       |   |   |   |       |               |   |   |   |   |   |
            o---o   o   o---o   o---o   o   o   o---o   o   o   o   o   o   o
            |       |               |       |       |   |   |   |   |   |   |
            o---o---o---o---o---o---o---o---o---o---o   o   o   o   o   o   o
            |       |               |           |       |       |   |   |   |
            o   o   o   o---o---o---o   o   o   o---o   o---o   o   o   o   o
            |   |   |   |       |   |   |       |           |   |   |   |   |
            o   o   o   o---o   o   o   o---o---o---o   o---o   o   o   o   o
            |   |   |       |       |           |           |       |   |   |
            o---o   o   o---o---o---o   o---o   o---o   o---o---o---o   o   o
            |       |   |                   |       |   |               |   |
            o   o---o---o---o---o---o---o   o   o---o   o   o---o---o---o   o
            |   |               |               |       |                   |
            o   o---o---o   o   o   o---o---o   o---o   o   o---o---o---o   o
            |           |       |           |   |       |       |       |   |
            o   o   o   o---o---o   o   o   o---o---o   o   o---o   o   o   o
            |   |   |       |       |   |               |   |       |   |   |
            o---o   o   o---o---o---o   o   o---o---o---o---o   o---o   o   o
            |       |   |       |       |   |   |   |           |       |   |
            o   o   o   o   o   o   o---o   o   o   o   o---o---o   o---o   o
            |   |   |       |       |           |       |                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'c00d1f', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |   |                       |                                   |
            o   o   o---o---o---o---o---o   o---o---o---o---o---o---o---o---o
            |   |   |                                                       |
            o   o   o---o---o---o---o---o   o---o---o---o   o---o---o---o   o
            |   |                       |   |           |               |   |
            o   o   o   o---o---o---o---o   o   o---o---o   o---o---o---o   o
            |   |   |                               |       |               |
            o   o   o   o   o---o---o   o   o   o   o   o---o   o---o   o   o
            |       |   |               |   |   |       |   |       |   |   |
            o   o   o   o---o   o---o   o   o   o   o   o---o   o   o   o   o
            |   |   |   |       |   |   |       |   |       |   |   |       |
            o   o   o---o   o   o---o   o---o   o   o---o   o   o   o---o   o
            |   |           |       |           |   |   |       |           |
            o   o   o   o   o---o---o---o---o---o---o---o---o   o   o   o   o
            |   |   |   |           |           |   |       |   |   |   |   |
            o   o   o   o   o---o   o   o   o   o   o   o   o   o   o   o---o
            |   |   |   |           |   |       |   |   |   |               |
            o   o   o   o---o---o---o   o---o---o   o   o   o   o---o---o   o
            |   |   |       |       |   |           |   |   |   |       |   |
            o   o   o---o   o   o   o   o   o   o   o---o   o   o---o---o   o
            |   |   |   |       |   |       |   |                           |
            o   o   o   o   o---o   o   o---o   o---o   o---o   o   o   o---o
            |   |       |   |       |                       |   |   |   |   |
            o   o   o   o---o---o   o---o---o---o---o---o---o   o   o   o   o
            |   |   |           |                       |                   |
            o   o   o   o   o---o---o   o---o---o---o---o   o---o---o---o   o
            |   |   |   |           |                                   |   |
            o   o   o   o---o   o   o---o   o---o---o   o---o   o---o---o   o
            |   |   |   |   |   |           |           |   |               |
            o   o   o   o---o   o   o---o   o---o---o---o---o---o---o---o---o
            |   |   |           |       |                                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'c00d1p', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |   |                               |                           |
            o   o   o---o---o   o---o---o---o---o   o---o---o---o---o---o   o
            |   |       |               |                   |               |
            o   o   o   o---o---o   o---o   o---o---o---o   o---o---o---o   o
            |   |   |           |       |               |               |   |
            o   o   o   o   o---o   o   o---o---o---o   o   o---o---o---o   o
            |           |           |               |   |                   |
            o   o---o---o---o---o---o---o---o---o   o---o   o---o---o   o---o
            |                       |                               |       |
            o   o---o   o---o---o---o   o---o---o---o---o---o---o---o   o   o
            |   |                   |                       |           |   |
            o   o---o---o   o---o---o---o---o---o---o---o---o   o   o   o   o
            |   |                   |               |           |   |   |   |
            o   o   o---o---o   o---o   o---o---o   o   o---o   o   o---o   o
            |   |           |       |   |       |   |   |   |   |           |
            o   o   o---o---o---o   o   o   o   o   o   o   o   o   o---o   o
            |   |   |               |           |       |   |           |   |
            o   o   o---o---o   o---o---o---o---o   o   o   o---o---o   o   o
            |   |       |       |                   |   |               |   |
            o   o   o---o   o---o   o---o---o   o---o---o   o---o---o   o   o
            |   |   |           |   |                               |   |   |
            o   o   o---o---o   o   o   o---o---o   o   o---o---o---o   o   o
            |   |                                   |   |                   |
            o   o---o---o   o---o---o---o---o---o   o   o---o---o---o---o   o
            |           |   |   |   |           |   |                   |   |
            o   o   o   o---o   o   o   o   o---o---o---o---o---o---o---o   o
            |   |   |           |   |   |   |       |                       |
            o   o   o---o---o   o   o   o   o---o   o   o---o---o---o   o---o
            |   |                   |   |                           |       |
            o   o   o---o---o   o   o---o   o---o---o---o   o---o---o---o   o
            |   |               |                       |                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'c00d2f', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |   |                   |                               |       |
            o   o   o---o---o---o---o   o---o---o---o---o---o---o---o   o   o
            |   |   |                                               |   |   |
            o   o   o   o---o---o   o---o---o   o---o   o---o---o   o   o   o
            |   |       |           |       |   |   |           |   |   |   |
            o   o   o   o   o---o---o---o---o   o   o   o---o   o   o   o   o
            |       |       |                   |   |       |   |   |   |   |
            o   o   o   o   o---o---o   o   o   o---o   o   o---o---o   o   o
            |   |       |               |   |           |       |           |
            o   o   o   o---o---o---o   o   o   o---o   o---o   o   o   o   o
            |   |   |   |           |   |   |   |   |       |   |   |   |   |
            o   o   o   o---o---o---o---o---o---o---o---o   o   o   o   o   o
            |   |   |               |               |   |   |       |   |   |
            o   o   o   o---o---o   o   o---o---o   o---o   o   o---o   o   o
            |   |   |               |           |                   |       |
            o   o---o---o---o---o---o   o   o   o   o---o---o---o---o---o---o
            |   |   |               |   |       |                   |       |
            o   o   o   o---o---o   o   o---o---o   o---o   o   o   o   o   o
            |   |   |               |               |   |   |   |   |   |   |
            o   o   o   o---o---o---o---o---o---o---o---o   o   o   o   o   o
            |   |   |   |           |   |   |   |   |   |   |   |       |   |
            o   o   o   o---o---o---o   o   o   o---o   o   o   o   o   o   o
            |   |       |               |   |           |       |   |       |
            o   o   o   o   o---o---o   o   o   o---o---o---o   o---o   o   o
            |       |       |                       |   |           |   |   |
            o   o   o   o   o---o---o---o---o   o   o---o   o---o---o   o   o
            |   |       |                   |   |                   |   |   |
            o   o   o   o   o---o---o---o---o   o---o---o---o---o---o   o   o
            |   |   |                                               |   |   |
            o   o   o---o---o---o---o   o---o---o---o---o---o---o---o   o   o
            |   |                   |                               |       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'c00d2p', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |   |                   |                           |           |
            o   o   o---o---o---o---o   o---o---o---o---o---o---o   o---o   o
            |   |   |                   |                           |   |   |
            o   o   o---o---o---o---o   o---o---o---o---o---o---o   o   o   o
            |   |                                               |   |   |   |
            o   o   o---o---o---o---o---o   o---o---o---o---o---o   o   o   o
            |   |   |                                   |           |   |   |
            o   o   o   o---o---o---o---o---o---o---o   o---o---o   o---o   o
            |   |   |   |                       |   |           |           |
            o   o   o   o   o   o---o---o---o---o   o   o---o   o   o---o   o
            |       |       |                       |   |   |       |   |   |
            o   o   o---o   o---o   o---o---o---o   o   o---o   o   o   o   o
            |   |   |   |   |   |   |           |               |   |   |   |
            o   o   o   o   o   o   o   o---o---o   o   o---o   o   o---o   o
            |       |   |   |   |   |           |   |   |   |   |           |
            o   o   o---o   o   o   o   o   o   o   o   o   o---o---o---o---o
            |   |           |   |   |   |       |   |   |   |   |           |
            o   o   o---o   o   o   o   o---o---o   o   o   o   o   o---o   o
            |   |   |   |   |   |   |                       |   |   |   |   |
            o   o   o   o   o   o   o   o---o---o   o   o   o   o   o   o   o
            |   |   |   |   |   |   |               |   |       |   |   |   |
            o   o   o   o---o   o---o   o---o---o---o   o   o   o   o---o   o
            |       |   |                               |   |               |
            o   o   o---o---o---o---o---o---o---o---o---o   o---o   o---o   o
            |   |   |                               |           |   |   |   |
            o   o   o   o---o---o   o---o---o---o---o   o---o---o   o   o   o
            |   |               |   |                   |           |   |   |
            o   o   o---o---o---o   o---o---o---o---o   o---o---o   o   o   o
            |   |   |                                           |   |   |   |
            o   o   o---o---o---o---o---o---o---o---o   o---o---o   o---o   o
            |   |                                   |   |                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'c00d3f', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |   |                       |                       |           |
            o   o   o---o---o---o---o---o   o---o---o---o---o---o   o---o   o
            |   |   |                                       |       |   |   |
            o   o   o---o---o---o---o---o   o---o---o   o   o---o   o   o   o
            |   |                       |   |       |   |       |   |   |   |
            o   o   o   o---o   o---o---o   o---o---o   o---o   o   o   o   o
            |       |   |   |                           |       |   |   |   |
            o   o   o   o---o   o---o   o---o---o---o   o---o   o   o---o   o
            |   |   |           |   |   |           |       |               |
            o   o   o---o---o   o   o   o---o---o---o   o---o---o   o---o   o
            |   |           |   |   |                       |   |   |   |   |
            o   o   o---o   o   o---o---o---o---o---o---o   o---o   o   o   o
            |   |   |   |       |   |                           |   |   |   |
            o   o   o   o   o---o   o   o---o---o---o---o   o---o---o   o   o
            |   |   |   |           |           |                   |   |   |
            o   o---o   o---o---o---o   o   o   o---o---o---o---o---o---o---o
            |   |   |   |           |   |       |                   |   |   |
            o   o   o   o   o---o   o   o---o---o---o---o   o---o---o   o   o
            |   |   |   |       |   |                           |   |   |   |
            o   o   o---o   o   o---o---o---o---o---o---o   o---o   o   o   o
            |   |           |   |   |               |       |   |   |   |   |
            o   o   o---o---o   o   o   o---o   o---o   o---o---o   o---o   o
            |   |   |           |   |   |   |   |   |   |   |               |
            o   o   o   o---o   o---o   o---o   o---o   o---o   o   o---o   o
            |       |   |   |               |               |   |   |   |   |
            o   o   o   o---o---o---o---o   o---o   o   o---o   o   o   o   o
            |   |                       |   |       |   |       |   |   |   |
            o   o   o---o---o---o---o---o   o---o   o   o---o   o   o   o   o
            |   |   |                               |           |   |   |   |
            o   o   o---o---o---o---o---o   o---o---o---o---o---o   o---o   o
            |   |                       |                       |           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'c00d3p', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |   |                           |                   |           |
            o   o   o---o---o---o---o---o---o   o---o---o---o---o   o---o   o
            |   |   |                           |               |   |   |   |
            o   o   o---o---o---o---o---o---o   o---o---o---o---o   o   o   o
            |   |                                               |   |   |   |
            o   o   o---o---o---o---o---o   o---o---o---o---o---o   o   o   o
            |   |                       |               |       |   |   |   |
            o   o   o---o---o---o---o---o---o---o---o   o---o---o   o   o   o
            |   |   |                           |   |           |   |   |   |
            o   o   o---o   o   o---o---o---o---o   o   o---o   o   o   o   o
            |       |   |   |                       |   |   |   |   |   |   |
            o   o   o   o   o   o---o---o---o---o   o   o   o   o   o   o   o
            |   |   |   |   |   |   |   |       |   |   |   |       |   |   |
            o   o   o   o   o   o   o   o---o---o   o   o---o   o   o---o   o
            |   |   |   |   |   |   |           |               |           |
            o   o   o---o   o   o   o   o   o   o   o---o---o---o---o---o---o
            |   |           |   |   |   |       |               |           |
            o   o   o---o   o   o   o   o---o---o   o   o---o   o   o---o   o
            |   |   |   |   |   |   |               |   |   |   |   |   |   |
            o   o   o   o   o   o   o---o---o---o   o   o   o   o   o   o   o
            |   |   |   |   |   |   |               |   |   |   |   |   |   |
            o   o   o   o   o---o---o---o---o---o---o   o---o   o   o   o   o
            |       |   |   |                                       |   |   |
            o   o   o---o---o---o---o---o---o---o---o---o   o---o   o   o   o
            |   |                                   |           |   |   |   |
            o   o   o---o---o---o   o---o---o---o---o   o---o---o   o   o   o
            |   |   |           |   |               |   |       |   |   |   |
            o   o   o---o---o---o   o---o---o---o---o   o---o---o   o   o   o
            |   |               |                               |   |   |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o   o---o   o
            |   |                           |                               |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'c00jcf', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |   |       |   |       |       |                               |
            o   o   o   o   o   o   o   o   o   o---o---o---o---o---o---o   o
            |   |   |   |   |   |   |   |   |                               |
            o   o   o   o   o   o   o   o   o   o---o---o---o---o---o---o   o
            |   |   |       |   |   |                                   |   |
            o   o   o   o---o   o   o   o---o   o   o---o   o---o---o---o   o
            |       |           |               |   |   |       |           |
            o   o   o   o---o---o   o---o---o   o   o   o   o   o   o---o   o
            |   |   |               |       |   |   |   |   |       |   |   |
            o   o   o   o---o---o---o---o---o   o   o---o   o   o   o   o   o
            |   |   |                           |           |   |   |   |   |
            o   o   o---o   o---o   o---o---o---o---o---o---o   o   o---o   o
            |   |       |       |   |               |           |           |
            o   o   o   o   o   o---o   o---o---o   o   o   o---o---o   o   o
            |       |       |       |           |       |       |       |   |
            o   o---o   o---o   o---o   o   o   o   o---o---o   o   o---o---o
            |       |       |       |   |       |       |       |       |   |
            o   o   o   o   o   o---o   o---o---o   o   o   o---o---o   o   o
            |   |       |       |   |               |           |           |
            o   o   o---o   o---o   o---o---o---o---o---o---o   o   o---o   o
            |   |   |                           |           |   |   |   |   |
            o   o   o   o---o---o---o---o---o   o   o---o   o   o   o   o   o
            |   |   |               |       |   |   |   |   |       |   |   |
            o   o   o   o---o---o   o---o---o   o   o   o   o   o   o---o   o
            |       |           |               |   |   |       |           |
            o   o   o   o---o   o   o   o---o   o   o---o   o---o---o---o   o
            |   |   |       |   |   |                                   |   |
            o   o   o   o   o   o   o   o   o   o---o---o---o---o---o---o   o
            |   |   |   |   |   |   |   |   |                               |
            o   o   o   o   o   o   o   o   o   o---o---o---o---o---o---o   o
            |   |       |   |       |       |                               |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'c00jcp', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |   |                   |                                       |
            o   o   o---o---o---o   o   o---o---o---o   o---o   o---o   o   o
            |   |   |                                                   |   |
            o   o   o   o---o---o---o---o   o---o---o---o---o   o---o   o   o
            |   |       |                                   |           |   |
            o   o   o   o   o---o---o---o---o---o---o---o---o---o   o---o   o
            |   |   |   |   |   |                               |       |   |
            o   o   o   o   o   o   o   o   o   o   o---o   o   o   o   o   o
            |       |       |   |   |   |   |   |       |   |   |   |   |   |
            o   o---o---o---o   o   o   o   o   o   o   o   o   o   o   o   o
            |   |               |   |   |       |   |   |   |               |
            o   o   o   o---o   o   o---o---o---o---o   o---o   o---o   o   o
            |   |   |   |       |   |               |   |           |   |   |
            o   o   o   o   o---o   o   o---o---o   o---o   o---o   o   o   o
            |   |                       |       |           |       |   |   |
            o   o   o---o---o---o---o   o   o   o   o---o---o   o---o   o   o
            |   |                               |           |       |   |   |
            o   o   o   o   o---o   o   o---o---o   o---o   o---o   o   o   o
            |   |   |   |       |   |               |   |           |   |   |
            o   o   o   o---o   o   o---o---o---o---o   o---o   o---o   o   o
            |   |               |   |   |       |   |   |   |               |
            o   o---o---o---o   o   o   o   o   o   o   o   o   o   o   o   o
            |       |       |       |   |   |   |       |   |   |   |   |   |
            o   o   o   o   o   o---o   o   o   o   o---o   o   o   o   o   o
            |   |   |   |   |                                   |       |   |
            o   o   o   o   o---o---o---o---o---o---o---o---o---o   o---o   o
            |   |   |   |                                   |           |   |
            o   o   o   o---o---o---o---o   o---o---o---o---o   o---o   o   o
            |   |       |                                               |   |
            o   o   o   o   o---o---o   o---o---o---o   o---o   o---o   o   o
            |   |   |                                                       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'chi-86', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |               |       |   |       |           |               |
            o---o---o   o   o   o   o   o   o   o   o   o   o   o---o---o   o
            |           |       |       |   |   |   |   |           |       |
            o   o---o   o   o---o---o   o   o   o   o   o   o   o   o   o   o
            |       |   |           |   |   |   |   |   |   |   |   |   |   |
            o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o
            |   |   |   |   |   |           |           |   |   |       |   |
            o   o---o   o---o---o---o   o---o---o---o---o   o   o---o   o   o
            |       |       |       |   |                   |       |       |
            o   o   o---o---o---o   o---o   o   o   o   o---o---o   o---o---o
            |   |   |               |   |   |   |   |           |           |
            o---o   o   o---o   o---o   o   o   o   o   o---o---o---o---o   o
            |       |                   |       |   |           |           |
            o   o---o---o---o---o---o---o---o---o---o---o---o   o   o---o   o
            |                       |           |               |       |   |
            o   o---o---o---o---o---o   o   o   o   o---o---o   o---o   o---o
            |   |                   |   |       |                   |       |
            o   o   o---o---o---o   o   o---o---o---o---o   o   o   o   o   o
            |   |   |               |   |   |       |   |   |   |       |   |
            o   o   o---o---o---o   o   o   o   o   o   o   o---o---o   o   o
            |   |               |       |       |       |           |       |
            o   o   o---o   o---o---o---o   o---o   o   o   o---o   o   o   o
            |   |   |                               |       |       |   |   |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o   o   o   o
            |   |               |           |   |               |   |       |
            o   o---o---o   o   o   o---o   o   o   o---o---o   o---o---o   o
            |           |   |       |   |       |                   |   |   |
            o   o---o   o   o---o---o   o   o---o---o---o---o---o   o   o   o
            |   |   |   |       |               |                   |       |
            o   o   o   o   o   o   o---o---o   o---o---o   o   o---o---o   o
            |   |           |               |               |               |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'chochi', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |           |                                               |   |
            o   o---o   o   o---o   o---o---o   o---o---o   o---o---o   o   o
            |       |                   |                                   |
            o   o   o   o---o   o---o   o   o   o---o   o---o---o---o   o   o
            |   |               |           |           |       |       |   |
            o   o   o---o   o   o   o   o   o   o   o---o   o   o   o   o   o
            |               |       |   |       |   |       |       |   |   |
            o   o---o---o---o---o---o   o   o   o   o   o   o   o   o   o   o
            |   |                   |       |       |   |       |       |   |
            o   o   o   o   o---o   o---o   o   o   o   o   o   o   o   o   o
            |   |   |   |       |       |       |   |       |       |   |   |
            o   o   o   o   o   o   o   o   o   o---o   o   o   o   o   o   o
            |   |       |   |       |   |   |   |       |       |       |   |
            o   o   o   o   o---o   o---o---o---o   o   o   o   o   o   o   o
            |   |   |   |       |       |       |   |       |       |   |   |
            o   o   o   o---o---o---o   o   o   o   o   o   o   o   o   o   o
            |   |                   |           |       |       |       |   |
            o   o   o---o   o---o---o---o---o---o   o   o   o   o   o   o   o
            |   |               |       |           |       |       |   |   |
            o   o   o   o   o   o   o   o   o   o---o   o   o   o   o   o   o
            |   |   |   |   |       |   |   |           |       |       |   |
            o   o   o   o   o---o   o   o---o   o   o---o---o---o---o---o   o
            |   |                           |   |       |   |   |   |       |
            o   o---o---o---o---o---o   o---o   o---o   o   o   o   o---o   o
            |   |           |       |       |                           |   |
            o   o   o   o   o   o   o---o   o---o   o   o   o   o   o   o   o
            |   |   |   |   |   |       |       |   |   |   |   |   |   |   |
            o   o   o   o   o   o   o   o---o   o---o---o---o---o---o   o   o
            |                       |   |                               |   |
            o   o   o---o   o---o   o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'chubu-2017', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                       |   |
            o   o   o---o---o   o---o   o---o   o---o   o---o   o---o   o   o
            |   |       |       |   |       |                       |   |   |
            o   o   o   o   o---o   o---o   o   o   o---o   o---o   o   o   o
            |   |   |       |       |           |                       |   |
            o   o   o   o   o   o---o---o   o   o---o   o---o   o---o   o   o
            |   |   |   |               |   |                       |   |   |
            o   o   o   o   o   o---o   o   o---o   o---o   o---o   o   o   o
            |   |       |   |       |   |                       |       |   |
            o   o   o   o---o   o   o   o---o---o---o   o---o   o   o   o   o
            |   |   |           |               |           |       |   |   |
            o   o   o---o   o---o---o   o---o---o---o---o   o   o   o   o   o
            |   |                               |       |       |       |   |
            o   o---o---o---o---o---o---o   o   o   o   o   o   o   o   o   o
            |   |       |       |       |       |   |       |       |   |   |
            o   o   o   o   o   o   o   o---o---o   o   o   o---o   o   o   o
            |   |   |   |   |   |   |   |       |       |       |       |   |
            o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o
            |   |   |   |   |   |   |   |   |       |       |       |   |   |
            o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o
            |   |   |   |   |   |   |   |       |       |       |       |   |
            o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o
            |   |   |       |       |       |       |       |       |   |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o   o   o
            |   |   |       |       |           |   |           |   |   |   |
            o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o
            |   |       |       |       |   |           |   |           |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'cut', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                       |   |                                   |
            o---o---o---o   o   o---o   o   o---o---o---o---o---o---o---o   o
            |               |               |               |               |
            o   o   o---o---o   o---o   o---o   o   o---o   o   o---o   o---o
            |       |   |   |           |   |   |   |   |   |               |
            o   o---o---o---o   o---o   o   o   o   o   o   o   o---o   o---o
            |               |           |   |           |   |           |   |
            o---o---o   o   o   o---o   o---o---o   o---o   o---o---o   o   o
            |   |   |   |   |   |   |   |   |   |   |   |               |   |
            o---o   o   o   o   o   o   o   o   o   o---o---o---o---o---o---o
            |               |           |   |   |                           |
            o   o---o---o---o---o---o---o   o   o   o---o---o   o---o   o   o
            |   |           |           |   |   |                       |   |
            o   o   o   o   o   o   o   o---o---o---o---o---o---o---o---o   o
            |   |   |   |   |   |   |   |                                   |
            o   o   o   o   o   o   o   o   o   o---o---o---o---o---o---o---o
            |                           |       |                           |
            o---o---o---o---o---o---o   o---o---o   o---o---o   o---o---o   o
            |           |           |       |       |           |       |   |
            o   o---o   o   o---o   o   o---o   o   o   o---o   o---o---o---o
            |           |   |   |   |               |   |   |   |           |
            o   o---o   o   o---o   o---o---o---o---o   o---o   o   o---o   o
            |           |                       |   |                       |
            o   o---o   o   o---o---o   o---o---o---o---o---o---o---o---o   o
            |           |           |   |           |           |   |       |
            o   o---o   o   o---o   o   o   o---o   o   o---o   o---o---o   o
            |           |       |   |   |           |           |           |
            o   o---o   o   o---o   o   o   o---o   o   o   o   o   o---o---o
            |                       |   |   |   |   |   |   |   |   |   |   |
            o   o---o---o---o   o---o   o   o   o   o   o   o   o   o   o   o
            |   |               |   |       |   |                   |       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'dame', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |           |       |           |           |                   |
            o   o---o---o   o   o   o   o---o   o---o   o---o   o---o   o   o
            |   |   |       |       |           |           |   |       |   |
            o   o   o   o---o---o---o   o---o   o   o---o---o   o---o   o   o
            |   |       |       |       |   |   |       |               |   |
            o   o   o---o   o---o   o---o   o---o---o   o---o---o---o---o   o
            |   |           |       |                       |   |   |   |   |
            o   o---o---o   o   o---o   o---o---o---o---o   o   o   o   o   o
            |           |   |   |                       |   |   |           |
            o   o---o---o   o---o---o---o---o---o   o   o   o   o   o---o   o
            |   |                   |       |       |   |   |       |   |   |
            o   o   o---o---o---o---o   o   o   o---o   o   o---o   o   o   o
            |   |       |           |   |       |       |       |       |   |
            o   o   o---o   o---o---o   o---o---o   o---o---o   o---o   o   o
            |   |                   |   |       |               |           |
            o   o---o---o   o---o---o   o   o   o---o   o---o   o---o---o   o
            |           |   |       |           |   |   |   |   |       |   |
            o   o---o---o   o---o   o---o---o---o   o---o   o---o   o   o   o
            |       |                               |               |   |   |
            o   o---o---o---o---o   o---o   o---o   o   o---o   o---o   o   o
            |                   |   |   |   |   |       |   |   |   |       |
            o---o---o---o---o   o---o   o---o   o---o---o   o---o   o---o   o
            |           |       |               |       |       |           |
            o   o---o---o   o---o---o   o---o   o---o   o   o   o   o---o---o
            |               |       |       |   |   |       |       |       |
            o---o---o   o---o---o   o---o   o   o   o   o---o---o---o---o   o
            |       |       |               |   |   |       |               |
            o   o---o   o   o   o   o---o---o   o   o   o---o   o   o---o---o
            |           |   |   |           |           |       |   |       |
            o   o---o---o   o---o---o---o   o---o---o---o   o---o   o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'diag-2', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                           |   |
            o   o---o---o   o---o   o   o---o---o---o---o   o---o---o   o---o
            |   |   |       |       |   |               |                   |
            o   o---o   o---o   o---o   o---o   o---o   o---o   o---o---o   o
            |   |       |       |           |       |       |       |       |
            o---o   o---o   o---o---o---o   o   o---o   o   o---o   o---o   o
            |       |       |           |   |   |   |   |       |       |   |
            o   o---o   o---o   o---o   o---o   o   o---o---o---o   o   o---o
            |   |       |       |   |       |   |           |       |       |
            o   o   o---o   o---o   o   o---o   o---o   o---o   o---o---o   o
            |       |       |   |   |   |           |   |       |           |
            o   o---o   o---o---o   o   o---o   o---o---o   o   o---o---o   o
            |   |       |           |       |               |   |       |   |
            o   o   o---o   o---o---o   o---o---o---o   o---o   o   o   o   o
            |       |   |   |       |   |       |   |   |       |   |   |   |
            o---o---o---o   o   o   o   o   o   o   o---o   o---o   o   o   o
            |               |   |   |           |   |       |   |   |   |   |
            o---o---o   o---o   o   o---o---o---o---o   o---o   o   o   o   o
            |   |       |       |       |       |       |       |   |   |   |
            o---o   o---o   o---o   o---o   o---o   o---o   o   o---o   o---o
            |       |       |       |       |       |       |       |       |
            o   o---o   o---o   o---o   o---o   o---o   o---o---o   o---o   o
            |   |       |       |       |       |       |       |       |   |
            o   o   o---o   o---o---o---o   o---o   o   o   o   o---o   o   o
            |       |       |                   |   |   |   |   |       |   |
            o   o---o   o---o   o---o---o   o---o   o---o   o---o   o---o   o
            |   |       |       |           |       |               |       |
            o   o   o---o   o---o   o---o---o   o---o---o---o   o---o   o   o
            |       |       |           |       |       |       |       |   |
            o   o   o---o   o---o   o---o   o---o---o---o   o---o   o---o   o
            |   |               |           |                       |       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'diagonals', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                       |           |                           |
            o   o---o   o---o   o---o   o---o   o---o---o---o   o   o---o   o
            |   |       |       |       |       |               |   |   |   |
            o---o   o---o   o---o   o---o   o---o   o---o---o   o---o   o   o
            |       |       |       |       |       |       |   |   |       |
            o   o---o   o---o   o---o   o---o   o---o   o---o---o   o---o   o
            |   |       |       |       |       |       |   |   |           |
            o   o   o---o   o---o   o---o   o---o   o---o   o   o---o   o   o
            |   |   |       |       |       |       |       |           |   |
            o   o   o   o---o   o---o   o---o   o---o   o   o---o   o   o   o
            |   |       |       |       |       |   |   |           |   |   |
            o   o   o---o   o---o   o---o   o   o   o   o---o   o   o   o   o
            |   |   |       |       |       |   |   |           |   |   |   |
            o   o---o   o---o   o---o   o---o   o   o---o   o   o   o   o   o
            |   |       |       |       |       |           |   |   |   |   |
            o   o   o---o   o---o   o   o   o   o---o   o   o   o   o   o   o
            |   |   |       |       |   |       |       |   |   |   |   |   |
            o   o   o   o---o   o---o---o   o---o   o   o   o   o   o   o   o
            |   |       |       |   |       |       |   |   |   |   |   |   |
            o   o---o---o   o---o---o   o---o   o   o   o   o   o   o   o   o
            |       |       |   |       |       |   |   |   |   |   |   |   |
            o   o---o   o---o---o   o---o   o---o   o   o   o   o   o   o   o
            |   |       |   |       |               |   |   |   |   |   |   |
            o   o   o---o---o   o---o   o---o---o---o   o   o   o   o   o   o
            |   |   |   |       |                       |       |   |   |   |
            o   o   o---o   o---o   o---o---o---o---o---o---o---o   o   o   o
            |   |   |       |                                       |   |   |
            o   o   o   o---o   o---o---o---o---o---o---o---o---o---o   o   o
            |   |       |                                               |   |
            o   o   o---o   o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'euro-58', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                           |                                   |
            o   o---o---o---o---o   o---o   o---o---o---o---o---o---o---o   o
            |   |               |       |   |       |       |               |
            o   o   o   o---o---o---o   o   o   o   o   o   o   o---o---o   o
            |       |   |           |   |       |       |   |   |       |   |
            o---o---o   o   o---o   o   o   o---o---o---o   o   o   o   o   o
            |           |   |   |                       |   |   |   |   |   |
            o   o---o---o   o   o---o---o---o---o---o   o   o   o   o   o   o
            |   |           |                           |   |   |   |   |   |
            o   o   o---o---o   o   o---o---o---o---o   o   o   o   o   o   o
            |   |   |           |   |               |   |   |   |   |   |   |
            o   o   o   o---o   o   o   o---o---o   o   o   o   o   o   o   o
            |   |   |       |   |   |               |       |   |   |   |   |
            o   o   o---o   o   o---o   o---o---o---o---o   o   o---o   o   o
            |   |               |       |               |   |       |   |   |
            o   o---o   o---o   o   o   o   o   o---o   o---o---o   o   o   o
            |       |           |   |   |       |   |               |   |   |
            o---o   o---o---o---o   o   o---o---o   o---o---o---o---o   o   o
            |       |           |   |   |           |           |       |   |
            o   o---o   o---o   o   o   o   o---o   o   o---o   o   o---o   o
            |   |           |           |       |   |       |   |       |   |
            o   o   o---o   o---o---o   o---o   o   o---o   o   o---o   o   o
            |   |   |       |       |           |   |       |           |   |
            o   o   o   o   o   o   o   o---o---o   o   o---o---o---o---o   o
            |       |   |   |   |               |   |           |           |
            o---o---o   o   o   o---o---o---o   o   o---o---o   o   o---o---o
            |           |   |   |           |   |           |   |   |       |
            o   o---o---o   o   o   o---o   o   o---o---o   o   o   o   o   o
            |               |   |       |   |           |       |       |   |
            o   o   o---o---o   o---o   o   o---o---o   o---o---o   o---o   o
            |   |                       |           |                       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'euro-84', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |               |                           |                   |
            o   o---o---o   o   o---o---o---o---o   o   o   o---o---o---o   o
            |           |       |                   |   |           |       |
            o---o---o   o---o---o   o---o---o---o   o   o---o---o   o   o---o
            |           |           |       |       |               |       |
            o   o---o---o   o---o---o   o   o   o---o---o   o---o---o   o   o
            |   |       |   |           |   |           |   |           |   |
            o   o   o   o   o   o---o   o   o---o---o---o   o---o---o   o   o
            |   |   |   |   |           |                   |       |   |   |
            o   o   o   o   o   o---o---o   o---o---o---o   o   o   o   o   o
            |   |   |       |   |                       |   |   |   |   |   |
            o   o   o---o---o   o   o---o---o---o---o   o   o   o   o   o   o
            |   |   |           |                   |   |   |   |       |   |
            o   o   o   o---o---o---o   o---o---o   o   o   o   o   o   o   o
            |   |   |               |   |       |   |   |   |       |   |   |
            o   o   o---o---o   o   o   o   o   o   o   o   o---o---o   o   o
            |   |               |   |   |           |   |   |           |   |
            o   o---o---o---o   o   o   o---o---o   o   o   o   o---o---o   o
            |   |           |   |   |               |   |   |           |   |
            o   o   o---o   o   o   o   o---o---o---o   o   o---o---o   o   o
            |   |       |   |   |   |           |       |   |           |   |
            o   o---o   o   o   o   o---o---o   o   o   o   o   o   o---o   o
            |           |   |   |           |       |       |   |           |
            o---o---o---o   o   o---o---o   o---o---o   o---o   o   o---o---o
            |               |           |               |   |   |   |       |
            o   o   o---o---o---o---o   o---o---o---o---o   o   o   o   o   o
            |   |   |               |                       |   |       |   |
            o   o   o   o---o---o   o---o---o   o---o---o---o   o---o---o   o
            |   |   |           |   |       |                   |       |   |
            o   o   o---o---o   o   o   o   o---o---o---o---o---o   o   o   o
            |   |               |       |                           |       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'expo-93', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                   |                           |
            o   o---o   o   o   o   o---o   o   o---o   o   o   o   o---o   o
            |       |   |   |   |   |       |       |   |   |   |       |   |
            o   o---o   o   o   o---o   o   o---o   o   o---o---o---o   o   o
            |   |           |           |       |       |                   |
            o   o   o---o   o   o   o   o   o   o   o   o   o---o   o   o---o
            |                   |   |       |       |   |       |   |       |
            o---o---o   o   o---o   o---o   o---o   o---o   o   o   o   o---o
            |           |               |           |       |   |           |
            o   o---o   o---o   o---o   o---o---o---o   o---o   o   o   o---o
            |       |       |       |   |       |               |   |       |
            o   o---o---o   o   o---o   o---o   o   o---o---o   o   o   o---o
            |                       |       |                   |           |
            o   o---o   o---o---o   o---o---o---o   o---o   o---o   o   o---o
            |           |       |       |       |   |   |   |       |       |
            o   o---o   o   o   o   o   o   o   o   o   o---o   o---o   o   o
            |               |   |   |   |           |               |   |   |
            o   o---o---o   o   o---o   o---o---o---o   o---o---o---o   o   o
            |                           |           |   |   |               |
            o   o---o---o---o   o   o   o   o---o---o   o   o   o---o---o   o
            |               |   |   |           |   |               |   |   |
            o---o   o---o   o---o   o---o---o   o   o---o   o---o   o   o   o
            |           |                               |   |               |
            o   o---o---o   o---o   o---o   o---o---o---o---o   o---o   o---o
            |       |       |   |   |               |       |   |       |   |
            o---o   o   o---o   o   o---o   o---o---o   o   o---o   o   o   o
            |                   |   |           |       |   |       |       |
            o   o---o   o---o   o   o---o   o---o---o   o   o   o   o---o   o
            |   |   |           |   |               |   |       |           |
            o   o   o   o---o   o   o---o   o---o---o   o   o---o   o---o   o
            |   |   |       |       |                   |                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'higashi-2017', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |               |       |   |           |                       |
            o   o---o   o---o   o   o   o   o   o---o   o---o---o---o   o---o
            |   |       |       |   |       |       |           |       |   |
            o   o   o---o   o---o   o---o   o---o   o---o   o   o   o   o   o
            |   |   |       |       |       |       |       |   |   |       |
            o   o   o   o---o   o---o   o---o   o---o   o---o   o   o   o   o
            |   |       |       |       |           |   |       |       |   |
            o   o---o---o   o---o   o---o   o---o---o---o   o---o   o   o---o
            |   |           |       |       |                   |   |       |
            o   o---o   o---o   o---o   o---o   o   o   o---o   o   o   o   o
            |   |       |       |       |   |   |   |       |   |       |   |
            o   o   o---o   o---o   o---o   o   o---o---o   o   o   o   o   o
            |   |   |       |       |       |   |           |   |   |       |
            o   o   o   o---o   o---o   o---o---o---o---o   o   o   o   o   o
            |   |       |       |       |       |           |   |       |   |
            o   o---o---o   o---o   o   o   o   o---o---o   o   o   o   o   o
            |   |           |       |   |       |           |   |   |       |
            o   o---o   o---o   o---o---o   o---o---o---o   o   o---o   o   o
            |   |       |                       |   |           |       |   |
            o   o   o---o   o---o   o   o---o   o   o---o   o---o   o---o   o
            |   |                   |   |       |   |       |       |       |
            o   o---o---o---o---o---o   o   o---o   o   o---o---o---o   o---o
            |       |           |                       |           |       |
            o---o   o   o---o   o---o---o---o---o---o---o   o---o   o---o   o
            |           |                               |   |       |       |
            o---o---o   o---o---o   o---o---o---o---o   o   o   o   o   o---o
            |           |       |                       |   |   |   |       |
            o   o   o---o   o---o   o---o   o---o   o---o   o---o   o---o   o
            |   |   |   |                                               |   |
            o   o   o   o   o   o---o   o---o   o---o   o---o   o---o   o   o
            |   |           |                                       |       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'hitel-51', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |               |                                           |   |
            o   o---o---o   o   o---o---o---o---o---o---o   o---o---o---o   o
            |           |       |                   |   |           |       |
            o---o---o   o   o---o   o   o---o---o   o   o---o---o   o   o---o
            |           |   |       |   |   |                       |       |
            o   o---o---o   o---o---o   o   o   o---o---o   o---o---o---o   o
            |   |       |   |           |   |           |   |           |   |
            o   o   o   o   o   o---o   o   o---o---o---o   o   o---o   o   o
            |   |   |   |   |           |               |   |           |   |
            o   o   o   o   o   o---o---o   o---o---o   o   o   o   o---o   o
            |   |   |       |   |                   |   |   |   |   |   |   |
            o   o   o---o---o   o   o---o---o   o   o   o   o   o   o   o   o
            |   |   |           |           |   |   |   |       |   |       |
            o   o   o   o---o---o---o   o---o   o   o   o---o---o   o---o   o
            |   |   |               |   |       |   |       |   |   |       |
            o   o   o---o---o   o   o   o   o   o   o---o   o   o   o---o   o
            |   |               |   |   |       |       |       |   |       |
            o   o---o---o---o   o   o   o---o---o   o   o---o---o   o---o   o
            |       |       |       |               |       |               |
            o   o   o   o   o   o   o   o---o---o---o   o   o---o   o---o   o
            |   |   |   |   |   |   |           |       |       |       |   |
            o   o   o   o   o   o   o---o---o   o   o   o   o   o---o---o   o
            |   |   |   |   |               |       |       |               |
            o   o   o   o   o   o---o---o   o---o---o---o---o   o   o---o   o
            |   |       |   |   |       |                   |   |       |   |
            o   o---o---o   o   o---o   o---o---o---o---o   o---o   o   o   o
            |   |           |       |                           |   |   |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o   o   o   o   o
            |   |   |       |       |       |       |       |           |   |
            o   o   o   o   o   o   o   o   o   o   o   o   o---o---o---o   o
            |   |       |       |       |       |       |                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'hitel-52', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |           |           |       |       |       |       |       |
            o   o---o   o---o   o   o   o   o   o   o   o   o   o   o   o   o
            |   |           |   |       |   |   |   |   |       |       |   |
            o   o---o   o---o   o   o   o   o   o   o   o---o   o---o---o   o
            |   |           |   |   |   |       |   |       |   |           |
            o   o---o   o---o   o---o---o---o---o   o---o   o---o   o---o   o
            |   |       |                   |       |       |       |       |
            o   o---o   o   o---o---o---o   o   o---o   o---o   o---o   o---o
            |   |           |           |   |   |       |       |   |       |
            o   o---o   o---o   o---o   o   o   o   o---o   o---o   o---o   o
            |   |           |       |       |       |       |           |   |
            o   o   o---o   o---o   o---o---o---o---o   o---o   o---o   o   o
            |   |           |       |       |           |   |       |       |
            o   o---o   o---o   o---o---o   o   o---o---o   o---o   o---o   o
            |   |           |       |               |   |       |           |
            o   o   o---o   o---o   o---o   o   o---o   o   o   o   o---o   o
            |   |           |       |               |       |       |   |   |
            o   o---o   o---o   o---o---o   o   o---o---o   o---o---o   o   o
            |   |           |   |       |   |   |       |       |   |       |
            o   o   o---o   o   o   o   o---o---o---o   o---o   o   o   o---o
            |   |           |       |       |       |       |               |
            o   o---o   o---o---o---o   o   o   o---o---o   o   o   o---o   o
            |   |           |   |       |   |   |       |       |           |
            o   o   o---o   o   o   o---o   o   o   o   o---o---o---o   o---o
            |   |           |       |       |       |   |   |   |           |
            o   o---o   o   o   o---o   o---o---o---o   o   o   o   o   o   o
            |   |       |       |       |   |   |   |   |           |   |   |
            o   o   o   o   o---o   o---o   o   o   o   o   o   o   o   o   o
            |       |           |       |           |       |   |       |   |
            o   o   o   o---o   o---o   o   o   o   o   o   o---o---o---o   o
            |   |           |       |       |   |       |                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'hitel-95', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o   o---o---o---o   o---o---o---o---o---o---o---o---o   o
            |       |                       |                               |
            o---o   o   o---o---o   o---o   o   o---o---o---o---o---o---o   o
            |       |                       |                           |   |
            o   o---o   o---o   o---o---o---o---o---o---o---o---o   o---o   o
            |       |   |       |                                   |   |   |
            o---o   o   o   o---o   o---o---o---o---o---o---o---o---o   o   o
            |       |       |   |   |                           |       |   |
            o   o---o   o   o   o   o   o---o---o---o   o   o   o   o   o   o
            |       |   |   |   |       |               |   |   |   |   |   |
            o---o   o   o---o   o---o   o   o   o---o   o   o   o   o   o   o
            |       |               |       |       |   |   |   |   |   |   |
            o   o---o   o---o---o---o---o---o---o---o   o   o   o   o   o   o
            |       |                   |       |       |       |   |   |   |
            o   o   o   o---o---o---o   o   o   o---o   o---o   o   o   o   o
            |   |   |   |       |       |       |           |   |   |   |   |
            o   o   o   o---o   o   o---o---o   o---o   o---o   o   o   o   o
            |   |   |       |       |               |       |       |   |   |
            o---o   o---o---o   o   o---o---o   o---o   o---o---o---o   o   o
            |       |   |       |       |           |   |               |   |
            o   o   o   o   o   o---o   o---o   o---o   o   o---o---o---o   o
            |   |   |       |           |           |   |                   |
            o   o   o   o   o   o   o---o---o   o---o   o   o---o---o---o   o
            |           |   |   |       |               |       |       |   |
            o   o---o   o   o   o---o   o---o   o---o   o   o---o   o   o   o
            |   |       |   |           |   |           |   |       |   |   |
            o   o   o---o   o   o---o---o   o---o---o---o---o   o---o   o   o
            |   |           |       |       |       |           |       |   |
            o   o---o   o---o   o   o   o   o   o   o   o---o---o   o---o   o
            |   |               |       |       |       |                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'hk-90', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |           |           |                                       |
            o   o---o   o   o---o   o   o---o---o---o---o---o---o---o   o   o
            |   |       |   |       |               |           |       |   |
            o   o   o---o   o   o---o   o---o---o   o   o---o   o   o---o   o
            |   |       |   |                       |   |   |       |       |
            o   o---o   o   o   o---o---o---o---o---o   o   o   o---o   o   o
            |   |       |   |   |                   |   |               |   |
            o   o   o---o   o   o   o---o---o---o   o   o---o---o---o---o   o
            |   |           |   |   |               |       |               |
            o   o---o---o---o   o   o   o---o---o   o---o   o   o---o---o   o
            |               |   |   |   |                   |               |
            o---o---o---o   o---o   o   o   o---o---o---o   o---o---o   o---o
            |           |   |       |   |               |           |       |
            o   o---o---o   o   o---o---o---o---o---o   o---o---o   o---o   o
            |   |       |   |           |       |                   |       |
            o   o   o   o   o---o   o---o   o   o---o---o---o---o---o   o   o
            |   |   |   |   |       |           |                       |   |
            o   o   o   o   o   o---o   o---o---o   o---o---o---o   o---o   o
            |   |   |   |   |   |       |       |                           |
            o   o   o   o   o   o   o---o   o   o---o---o---o   o---o   o---o
            |   |       |   |   |   |       |   |   |               |       |
            o   o   o   o   o   o   o   o---o   o   o   o   o---o---o---o   o
            |       |   |   |   |   |   |       |   |   |       |   |       |
            o   o   o   o   o   o   o   o   o---o   o   o---o   o   o   o---o
            |   |   |   |   |   |   |   |           |       |       |       |
            o---o   o   o   o   o   o   o   o---o---o---o   o   o   o---o   o
            |       |       |       |   |   |               |   |       |   |
            o   o   o---o---o---o---o---o   o   o---o---o---o   o   o   o   o
            |   |                           |                   |   |       |
            o   o   o---o---o---o---o---o   o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'hk-91', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                               |               |
            o   o   o---o---o---o---o---o---o---o---o   o   o   o---o---o   o
            |   |   |       |       |       |       |   |   |   |       |   |
            o   o   o   o   o   o   o   o   o   o   o   o   o   o---o   o   o
            |   |       |       |       |       |   |   |   |           |   |
            o   o---o---o---o---o---o---o---o---o   o   o   o---o---o---o   o
            |   |                                   |   |                   |
            o   o   o---o---o---o---o---o---o---o---o---o---o   o---o---o---o
            |   |   |                           |                           |
            o   o   o   o---o---o---o---o---o   o---o---o   o---o---o---o   o
            |   |   |   |                       |                       |   |
            o   o   o   o   o---o---o---o---o---o---o   o---o---o---o   o   o
            |   |   |   |                   |               |           |   |
            o   o   o   o---o---o---o   o---o---o   o---o---o   o---o---o   o
            |   |   |   |           |   |       |       |                   |
            o   o   o   o   o---o   o   o   o   o---o   o---o---o---o---o   o
            |   |   |       |       |           |       |               |   |
            o   o   o---o---o   o---o---o---o---o   o---o   o---o---o   o   o
            |   |                                   |               |   |   |
            o   o---o---o---o---o---o---o   o---o---o---o---o---o   o   o   o
            |               |           |                           |   |   |
            o---o   o---o   o   o---o   o---o---o---o---o---o---o---o   o   o
            |           |   |           |                           |   |   |
            o   o---o   o   o---o---o   o---o---o---o---o---o---o   o   o   o
            |           |               |                           |   |   |
            o   o   o---o---o---o---o   o   o---o---o---o---o---o   o   o   o
            |   |   |                   |                       |   |   |   |
            o   o   o   o---o---o---o---o---o---o---o---o---o   o   o   o   o
            |   |   |                                           |       |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'hoku-4', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |       |       |       |               |               |       |
            o   o   o   o   o   o   o   o---o---o   o   o---o   o   o   o   o
            |   |       |   |   |       |       |       |   |   |       |   |
            o   o---o   o   o   o   o   o---o---o   o   o   o   o   o---o   o
            |       |   |       |   |               |   |       |           |
            o---o   o   o   o   o   o---o---o---o---o   o   o   o   o   o---o
            |       |   |   |   |                       |   |   |   |       |
            o   o---o   o---o---o---o   o---o---o   o---o   o   o   o---o   o
            |   |                   |   |       |   |                   |   |
            o   o   o---o---o---o   o   o---o---o   o   o---o---o---o   o   o
            |   |               |   |               |   |               |   |
            o   o   o   o---o   o   o---o---o---o---o   o   o---o   o   o   o
            |       |   |   |   |   |               |   |   |   |   |   |   |
            o   o   o   o---o   o   o   o---o---o   o   o   o---o   o   o   o
            |   |   |           |   |   |       |       |           |   |   |
            o   o   o---o---o---o   o   o   o   o   o---o---o---o---o   o   o
            |   |                   |           |   |                   |   |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o   o---o   o
            |                                                   |           |
            o   o---o---o---o---o   o---o   o   o---o   o---o   o---o---o   o
            |               |       |       |       |       |   |       |   |
            o   o---o   o   o---o   o---o---o---o---o   o---o   o   o   o   o
            |   |   |   |       |                       |       |   |   |   |
            o   o---o   o   o   o   o   o---o---o   o   o   o   o   o   o   o
            |           |   |   |   |   |       |   |   |   |   |   |       |
            o   o---o---o   o---o---o---o   o   o---o---o---o   o   o   o   o
            |               |               |                   |   |   |   |
            o   o---o---o   o---o   o---o---o---o---o   o---o---o   o---o   o
            |   |   |   |           |               |               |   |   |
            o   o---o   o   o---o---o   o---o---o   o---o---o   o   o---o   o
            |   |                       |       |               |           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'iee-88', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o   o
            |   |                                                   |   |   |
            o   o   o---o---o---o---o---o---o---o---o   o---o---o   o   o   o
            |   |   |                               |   |       |   |   |   |
            o   o   o   o---o---o---o---o---o---o   o   o   o   o   o   o   o
            |   |       |                           |   |   |   |   |   |   |
            o   o---o---o   o---o---o---o---o---o---o   o   o   o   o   o   o
            |   |   |       |       |               |   |   |   |   |   |   |
            o   o   o   o---o   o   o   o---o---o   o   o   o   o   o   o   o
            |   |       |       |   |   |           |   |   |   |   |   |   |
            o   o   o---o   o---o   o   o   o---o   o   o   o   o   o   o   o
            |   |           |       |   |       |       |   |   |   |   |   |
            o   o---o---o---o   o---o   o---o---o   o---o   o   o   o   o   o
            |               |       |           |   |   |   |   |   |   |   |
            o   o---o---o   o---o   o   o   o   o   o   o   o   o   o   o   o
            |   |       |           |   |       |   |       |   |   |   |   |
            o   o   o   o---o---o---o   o---o---o   o   o---o   o   o   o   o
            |   |   |               |       |       |       |   |   |   |   |
            o   o   o---o---o   o---o---o   o   o---o---o   o   o   o   o   o
            |   |           |       |       |           |   |   |   |   |   |
            o   o---o---o   o---o   o   o---o---o---o   o   o   o   o   o   o
            |   |       |       |   |               |   |   |   |   |   |   |
            o   o   o   o---o   o   o---o---o   o   o   o   o   o   o   o   o
            |       |   |       |               |       |   |   |   |   |   |
            o---o   o   o   o---o---o---o---o---o---o---o   o   o   o---o   o
            |       |   |                                   |   |           |
            o   o   o   o---o---o---o---o---o---o---o---o---o   o---o---o---o
            |   |   |                                                       |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'ies-90', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                       |                                       |
            o   o---o---o---o   o---o---o---o---o   o---o---o---o---o---o   o
            |   |                                                       |   |
            o   o   o---o   o---o   o   o---o   o---o   o---o   o---o   o   o
            |   |       |   |       |   |       |       |   |   |   |       |
            o   o   o---o   o---o---o---o---o---o---o---o---o---o   o---o   o
            |   |           |       |   |           |       |   |   |   |   |
            o   o---o   o---o---o   o   o---o   o---o   o---o   o---o   o   o
            |   |       |       |                                       |   |
            o   o   o---o---o   o---o---o   o---o   o---o   o---o---o   o   o
            |   |   |           |               |   |   |       |   |   |   |
            o   o   o   o---o   o---o---o   o   o   o   o   o   o   o   o   o
            |               |   |   |       |   |   |       |   |           |
            o   o   o---o   o   o   o   o---o---o   o   o   o   o   o   o   o
            |   |                   |   |       |   |   |   |       |   |   |
            o   o---o   o---o---o   o   o   o   o   o   o---o   o   o   o   o
            |               |       |   |       |               |   |   |   |
            o   o---o   o---o---o   o   o   o---o---o---o   o---o---o   o   o
            |               |       |   |   |                           |   |
            o   o---o   o---o---o   o   o   o---o---o---o---o---o   o   o   o
            |   |           |       |   |   |                       |   |   |
            o   o---o   o---o   o---o   o   o   o---o   o   o   o   o   o   o
            |   |           |   |   |       |           |   |   |   |   |   |
            o   o---o   o---o   o   o---o   o   o   o---o   o   o   o   o   o
            |               |           |   |   |   |   |           |   |   |
            o   o---o   o   o   o---o   o---o   o   o   o   o   o   o   o   o
            |   |   |   |   |       |       |               |   |   |   |   |
            o   o   o   o   o   o   o---o   o---o   o---o---o   o---o   o   o
            |   |   |   |   |   |   |   |   |                               |
            o   o   o   o---o   o   o   o   o---o   o---o---o---o---o---o   o
            |   |                                       |                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'ies-91', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o   o   o---o---o---o---o---o   o---o---o---o   o   o
            |   |           |           |                               |   |
            o   o   o---o   o---o   o---o---o   o---o   o---o---o   o---o   o
            |   |       |       |       |       |                       |   |
            o   o   o---o   o---o---o   o   o---o---o   o---o   o---o---o   o
            |   |                   |                       |   |   |   |   |
            o   o---o---o   o---o   o---o   o---o---o---o---o   o   o   o   o
            |       |           |       |               |               |   |
            o   o   o---o---o   o---o---o---o   o---o---o   o---o---o   o   o
            |   |   |                       |               |   |   |   |   |
            o   o   o   o---o   o---o---o   o   o---o   o---o   o   o   o   o
            |                   |   |       |                           |   |
            o   o   o---o   o   o   o   o---o---o---o---o   o---o   o   o   o
            |   |           |       |   |       |                   |   |   |
            o   o---o   o---o---o---o---o   o   o---o---o---o---o   o---o   o
            |                           |       |                       |   |
            o   o---o   o---o---o---o   o---o   o   o---o---o   o---o   o   o
            |                       |   |   |           |       |       |   |
            o   o---o   o---o---o   o   o   o---o---o---o---o---o---o---o   o
            |                                                   |       |   |
            o   o---o   o---o   o   o---o   o---o   o---o   o   o   o   o   o
            |               |   |   |       |           |   |       |   |   |
            o---o---o   o   o---o---o---o---o---o---o---o---o---o   o   o   o
            |           |   |   |   |   |       |       |   |   |   |   |   |
            o   o   o   o   o   o   o---o   o---o   o---o   o   o   o   o   o
            |   |   |                                           |   |   |   |
            o   o   o   o   o---o   o---o   o---o   o---o   o   o   o---o   o
            |   |   |   |   |   |       |   |               |           |   |
            o   o   o   o   o   o   o---o---o---o   o---o   o---o---o---o   o
            |   |                       |                                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'ijcf02', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |   |       |           |                               |       |
            o   o   o   o   o---o   o   o---o---o---o   o---o---o---o   o   o
            |   |   |   |   |                               |           |   |
            o   o   o   o   o   o   o---o   o   o---o   o   o   o---o   o   o
            |   |   |   |       |           |           |   |       |   |   |
            o   o   o   o   o---o---o   o---o---o---o   o   o   o   o   o   o
            |   |       |                   |           |   |   |   |   |   |
            o   o   o   o   o---o---o---o   o   o---o   o   o   o   o   o   o
            |   |   |       |                   |       |   |   |   |       |
            o   o   o   o---o   o---o---o   o   o   o   o   o   o   o   o   o
            |       |   |       |           |   |   |       |   |       |   |
            o   o   o   o   o   o   o   o---o   o   o   o   o   o   o   o   o
            |   |   |       |   |   |               |   |       |   |   |   |
            o   o   o---o   o   o   o   o---o---o---o---o---o   o   o   o   o
            |   |           |   |       |       |                   |   |   |
            o   o   o   o---o---o---o---o   o   o   o---o   o---o---o   o   o
            |   |   |                   |                           |   |   |
            o   o   o---o   o   o   o   o---o---o---o---o   o   o   o   o   o
            |   |   |       |   |   |                   |   |   |   |   |   |
            o   o   o   o   o   o   o   o---o---o---o---o   o   o   o   o   o
            |   |       |   |   |   |           |       |                   |
            o   o   o   o   o   o   o   o   o   o   o   o   o   o---o   o   o
            |   |   |   |               |   |   |   |   |   |       |   |   |
            o   o   o   o---o   o---o---o   o   o   o   o   o   o   o   o   o
            |   |   |                       |       |           |   |   |   |
            o   o   o   o---o   o---o---o   o   o   o   o   o   o   o   o   o
            |   |       |                       |       |   |   |   |   |   |
            o   o   o   o   o---o   o---o---o   o   o   o   o   o   o   o   o
            |   |   |       |   |   |       |   |   |   |   |   |   |   |   |
            o   o   o   o   o   o   o---o   o   o   o   o   o   o   o   o   o
            |   |       |       |           |       |       |   |           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'ijcp02', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |   |                           |                           |   |
            o   o   o---o---o   o   o---o---o---o---o   o   o---o---o   o   o
            |   |               |                       |               |   |
            o   o   o---o---o---o---o   o---o---o   o---o---o---o---o   o   o
            |   |               |                       |               |   |
            o   o   o   o---o   o   o---o---o---o---o   o   o---o   o   o   o
            |       |       |           |       |           |       |       |
            o   o   o---o   o   o   o   o   o   o   o   o   o   o---o   o   o
            |   |   |   |   |   |   |       |       |   |   |   |   |   |   |
            o   o   o   o   o   o   o---o   o   o---o   o   o   o   o   o   o
            |   |   |   |       |   |   |   |   |   |   |       |   |   |   |
            o   o   o   o   o---o   o---o   o   o---o   o---o   o   o   o   o
            |       |   |       |           |           |       |   |       |
            o   o   o---o   o   o---o---o---o---o---o---o   o   o---o   o   o
            |   |           |           |       |       |   |           |   |
            o   o---o---o---o   o---o   o   o   o   o   o   o   o---o---o   o
            |   |           |           |           |                   |   |
            o   o   o---o   o   o---o---o---o---o---o---o   o   o---o   o   o
            |       |   |       |           |           |   |   |   |       |
            o   o   o   o   o---o   o---o   o   o---o   o---o   o   o   o   o
            |   |   |   |       |   |   |   |   |   |   |       |   |   |   |
            o   o   o   o   o   o   o---o   o   o---o   o   o   o   o   o   o
            |   |   |   |   |   |   |       |       |   |   |   |   |   |   |
            o   o   o---o   o   o   o   o   o   o   o   o   o   o---o   o   o
            |       |       |           |       |           |       |       |
            o   o   o   o---o   o   o---o---o---o---o   o   o---o   o   o   o
            |   |               |                       |               |   |
            o   o   o---o---o---o---o   o---o---o   o---o---o---o---o   o   o
            |   |               |                       |               |   |
            o   o   o---o---o   o   o---o---o---o---o   o   o---o---o   o   o
            |   |                           |                           |   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2000', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |       |       |       |       |   |   |           |           |
            o   o   o   o   o   o   o   o   o   o   o   o   o---o   o---o   o
            |   |   |   |       |       |               |       |       |   |
            o   o   o   o   o   o   o   o   o   o   o---o   o   o---o   o   o
            |   |   |   |   |       |       |   |   |       |       |   |   |
            o   o   o   o---o---o---o---o---o---o   o   o   o   o   o   o   o
            |   |   |   |   |       |   |       |       |       |   |   |   |
            o   o   o   o   o   o   o   o   o   o---o---o---o   o   o   o   o
            |   |   |   |       |       |   |   |           |       |   |   |
            o   o   o   o   o---o---o   o   o   o   o---o   o---o   o   o   o
            |   |   |   |           |       |       |               |   |   |
            o   o   o   o   o---o   o---o---o---o---o   o---o---o---o   o   o
            |   |   |   |   |           |           |           |       |   |
            o   o   o   o---o   o---o   o   o---o   o---o---o   o   o---o   o
            |   |   |   |   |           |       |               |       |   |
            o   o   o   o   o---o   o---o   o   o   o---o---o---o---o   o   o
            |   |   |       |           |       |   |       |       |   |   |
            o   o   o   o   o   o---o---o   o---o   o   o   o   o   o   o   o
            |   |   |   |   |       |   |               |       |       |   |
            o   o   o   o   o---o   o   o---o---o---o---o---o---o---o---o   o
            |   |       |       |           |       |       |       |       |
            o   o   o---o   o   o---o   o---o   o   o   o   o   o   o   o---o
            |   |   |       |               |   |       |       |   |       |
            o   o   o   o---o---o---o---o---o   o   o---o---o   o   o---o   o
            |   |       |       |       |   |           |           |   |   |
            o   o---o---o   o   o   o   o   o   o---o---o---o---o   o   o   o
            |   |   |   |   |   |   |   |           |       |           |   |
            o   o   o   o   o   o   o   o   o   o   o   o   o   o---o   o   o
            |                               |   |       |       |       |   |
            o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o
            |   |   |   |   |   |   |   |           |       |       |       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2001', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |           |       |   |       |   |   |   |       |           |
            o   o   o---o   o---o   o   o   o   o   o   o   o   o   o---o   o
            |   |   |       |           |                   |               |
            o   o   o   o   o   o   o   o   o   o   o   o   o   o   o---o   o
            |   |   |   |   |   |   |       |   |   |   |       |           |
            o   o   o   o   o   o---o---o---o---o---o---o---o---o---o   o---o
            |   |   |   |   |               |           |       |           |
            o   o   o   o   o   o---o   o---o   o---o   o   o   o   o   o   o
            |   |   |   |       |           |       |       |       |   |   |
            o   o   o   o   o---o   o   o---o---o   o---o---o---o---o---o   o
            |   |   |   |   |       |   |               |                   |
            o   o   o   o---o   o---o---o---o   o   o---o   o---o   o---o---o
            |   |   |   |       |   |   |       |   |       |       |       |
            o   o   o   o   o---o   o   o   o---o---o   o   o   o---o   o   o
            |   |   |       |           |       |       |   |       |   |   |
            o   o   o   o---o   o   o   o   o   o   o   o---o---o   o   o   o
            |   |       |       |   |   |       |   |       |       |   |   |
            o   o   o---o   o---o---o   o   o---o   o---o   o   o---o   o   o
            |   |   |       |   |       |       |       |   |       |   |   |
            o   o   o   o---o   o   o   o---o   o---o   o   o---o   o   o   o
            |   |       |   |       |       |       |       |       |   |   |
            o   o   o---o   o   o   o   o   o---o   o   o---o   o---o   o   o
            |   |   |   |       |       |       |       |               |   |
            o   o---o   o   o---o   o---o   o---o---o---o---o---o---o---o   o
            |   |   |       |       |       |   |       |   |       |       |
            o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o---o
            |   |       |       |       |           |           |       |   |
            o   o   o   o   o   o   o   o   o   o   o   o   o   o---o---o   o
            |       |       |       |       |   |       |   |               |
            o   o   o   o   o   o   o   o   o---o---o---o---o---o---o---o   o
            |   |       |       |       |                                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2002', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |           |                                                   |
            o   o---o   o---o   o---o   o---o   o---o---o---o---o   o   o   o
            |               |       |       |   |               |   |   |   |
            o---o   o---o   o---o   o---o   o   o   o---o---o   o---o---o---o
            |           |       |       |       |   |               |       |
            o   o---o   o---o   o---o   o---o---o   o   o---o---o---o---o   o
            |           |           |               |   |   |       |       |
            o---o   o---o   o---o---o---o   o   o---o   o   o   o   o   o   o
            |           |           |   |       |       |       |       |   |
            o---o   o---o---o---o   o   o---o---o   o---o   o---o---o---o   o
            |           |               |   |       |           |           |
            o---o   o---o---o   o---o   o   o---o   o---o   o---o   o---o---o
            |           |               |       |       |   |       |       |
            o---o   o---o   o---o   o---o   o   o   o---o   o---o   o   o   o
            |           |           |   |           |           |       |   |
            o---o   o---o---o   o---o   o   o---o---o   o   o---o---o---o   o
            |           |           |                       |       |       |
            o---o   o---o   o---o   o---o   o   o---o---o---o   o   o   o   o
            |                           |   |   |       |       |       |   |
            o   o---o   o---o   o---o---o---o---o   o   o---o   o---o---o---o
            |                       |       |       |   |                   |
            o---o   o---o   o---o---o   o   o   o   o   o---o---o---o   o---o
            |                   |       |       |   |               |       |
            o   o---o   o---o---o   o---o---o   o   o---o---o---o   o---o   o
            |               |           |           |       |       |   |   |
            o---o   o---o   o   o---o   o   o---o   o   o   o   o   o   o   o
            |               |           |       |               |       |   |
            o   o   o   o---o   o   o   o   o   o   o   o   o   o   o   o   o
            |   |   |           |   |       |       |       |       |       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2003', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o---o
            |                               |       |       |   |           |
            o---o---o---o---o---o---o---o   o   o   o   o   o   o   o   o   o
            |               |       |       |   |       |           |   |   |
            o   o---o---o   o   o   o   o   o   o---o   o---o   o---o---o   o
            |   |       |       |       |   |       |               |       |
            o   o   o   o---o---o---o---o   o---o   o---o---o---o---o   o---o
            |   |   |   |   |   |   |       |       |               |       |
            o   o   o   o   o   o   o   o---o   o---o   o   o   o   o---o   o
            |   |   |                   |       |       |       |       |   |
            o   o   o---o   o   o   o---o   o---o   o---o---o---o---o   o   o
            |   |       |   |   |   |       |           |       |           |
            o   o---o   o---o---o---o   o---o---o   o---o   o   o   o---o---o
            |                   |                   |       |   |           |
            o---o   o---o   o---o---o   o   o   o---o   o   o   o---o---o   o
            |                       |   |       |       |   |               |
            o   o---o   o---o   o   o   o---o---o   o---o---o---o---o---o---o
            |                   |   |   |   |   |                           |
            o---o   o---o   o   o   o---o   o   o---o---o---o---o---o---o   o
            |   |           |           |                   |       |       |
            o   o---o   o   o   o---o   o   o---o   o   o   o   o   o   o---o
            |   |       |       |       |   |       |   |       |           |
            o   o   o   o   o---o   o---o   o   o---o   o---o---o---o---o---o
            |       |       |       |       |   |           |       |       |
            o   o   o   o---o   o---o   o---o   o---o   o   o   o   o   o   o
            |   |       |       |       |       |       |       |       |   |
            o   o   o---o   o---o   o---o   o   o   o   o   o   o   o   o   o
            |           |                   |       |       |       |       |
            o   o   o   o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |   |                                                       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2004', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o   o
            |   |       |       |       |                   |           |   |
            o   o   o   o   o   o   o   o   o---o   o---o   o---o   o   o   o
            |   |   |       |       |       |       |       |       |       |
            o   o   o   o   o   o   o   o   o   o---o   o---o   o   o   o   o
            |   |       |       |       |   |   |       |       |       |   |
            o   o   o---o---o---o---o---o---o   o   o---o   o   o   o---o   o
            |   |       |   |       |       |   |           |       |       |
            o   o   o   o   o   o   o   o   o   o---o   o   o   o   o   o---o
            |   |   |       |   |   |   |   |   |       |       |   |       |
            o   o   o   o   o   o   o   o   o   o   o   o   o---o---o---o   o
            |   |       |       |       |       |   |       |   |       |   |
            o   o   o   o---o---o---o---o---o---o   o   o---o   o   o   o   o
            |   |   |           |       |       |       |       |   |   |   |
            o   o   o---o   o---o---o   o   o   o   o---o   o   o   o   o   o
            |   |       |       |               |           |   |   |   |   |
            o   o---o   o---o   o---o   o---o   o---o---o---o   o   o   o   o
            |   |           |       |       |       |           |   |   |   |
            o   o   o---o   o---o   o   o   o   o---o   o---o---o   o   o   o
            |   |           |       |   |       |       |       |   |   |   |
            o   o---o   o---o   o---o   o   o---o   o---o   o   o   o   o   o
            |   |       |       |       |       |           |   |   |   |   |
            o   o   o---o   o---o   o   o   o   o---o---o---o   o   o   o   o
            |   |   |       |       |       |       |       |   |   |   |   |
            o   o   o   o---o   o---o---o   o---o   o   o   o   o   o   o   o
            |   |   |           |           |       |   |   |   |   |   |   |
            o   o   o   o---o---o   o---o---o   o---o   o   o   o   o   o   o
            |   |   |   |                       |       |       |   |   |   |
            o   o   o---o   o---o---o---o---o---o   o---o---o---o   o   o   o
            |   |                                                   |       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2005-f', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o---o
            |                   |                               |           |
            o---o   o---o   o   o   o---o---o---o---o---o   o---o   o---o   o
            |               |   |                   |       |       |       |
            o   o---o   o   o   o---o---o---o---o   o   o---o   o---o   o   o
            |           |       |                   |   |       |       |   |
            o---o   o---o---o   o   o---o   o---o---o   o   o---o   o---o   o
            |           |       |       |           |       |           |   |
            o---o   o---o---o   o---o   o---o   o---o---o---o---o   o---o   o
            |           |       |               |           |           |   |
            o---o   o---o   o---o---o   o---o---o   o---o   o---o   o---o   o
            |           |       |               |       |   |           |   |
            o---o   o---o---o   o---o   o   o---o---o   o   o---o   o---o   o
            |           |       |   |   |       |       |   |           |   |
            o---o---o   o   o---o   o---o   o   o---o   o   o---o---o   o   o
            |       |   |   |           |       |       |       |   |   |   |
            o   o   o   o   o   o---o   o---o   o   o   o---o   o   o   o   o
            |   |   |   |       |       |           |   |   |       |   |   |
            o   o   o   o   o---o   o   o---o---o---o---o   o   o   o   o   o
            |   |       |   |       |       |       |       |   |       |   |
            o   o---o---o---o   o---o   o   o   o   o   o   o---o---o---o   o
            |   |       |       |       |       |       |       |   |   |   |
            o   o---o   o   o---o   o---o---o   o   o   o   o   o   o   o   o
            |   |   |       |       |           |   |       |       |   |   |
            o   o   o   o---o   o---o   o---o---o---o---o---o---o   o   o   o
            |   |       |       |       |       |       |       |       |   |
            o   o   o---o   o---o   o   o   o   o   o   o   o   o   o   o   o
            |           |       |   |       |       |       |   |   |   |   |
            o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o
            |   |   |       |           |       |       |           |       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2007-ef', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |       |       |                                           |
            o   o   o   o   o   o   o---o---o---o---o---o---o   o---o   o   o
            |       |       |       |                   |       |       |   |
            o---o   o---o---o---o---o   o---o---o---o   o   o---o   o---o   o
            |           |   |   |   |       |       |       |       |   |   |
            o---o---o   o   o   o   o---o   o   o   o   o---o   o---o   o   o
            |       |   |               |   |   |   |   |       |       |   |
            o   o   o   o   o   o   o   o   o   o   o   o   o---o   o   o   o
            |   |   |   |   |   |   |       |   |   |   |   |       |   |   |
            o   o   o   o   o---o---o---o---o   o   o   o   o   o---o   o   o
            |   |       |   |                   |       |       |       |   |
            o   o---o---o   o   o---o---o---o---o---o---o---o---o   o---o   o
            |           |   |   |       |       |   |   |   |       |       |
            o---o   o   o   o   o   o   o   o   o   o   o   o   o---o   o   o
            |       |   |   |       |   |                   |   |       |   |
            o   o---o   o   o---o   o   o---o---o   o---o   o   o   o---o   o
            |       |   |       |   |       |   |       |   |   |       |   |
            o---o   o   o---o   o---o   o---o   o---o   o   o   o---o   o   o
            |       |       |                       |   |   |   |       |   |
            o   o---o---o   o   o   o---o---o   o   o   o   o   o   o---o   o
            |       |   |   |   |           |   |   |   |       |       |   |
            o---o   o   o   o---o---o---o   o---o   o   o   o---o---o   o   o
            |       |       |   |   |   |       |   |   |               |   |
            o   o---o   o---o   o   o   o---o   o   o   o---o---o---o---o   o
            |   |       |                   |   |   |                   |   |
            o   o   o   o   o   o   o   o   o   o   o---o---o---o---o   o   o
            |       |       |   |   |   |       |   |                   |   |
            o   o   o   o   o   o   o   o---o   o   o   o---o---o---o---o   o
            |   |       |                           |                       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2008-ef', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |       |       |                                           |
            o   o   o   o   o   o   o---o---o---o---o---o---o   o---o   o   o
            |       |       |       |   |       |       |       |       |   |
            o   o   o---o---o---o   o   o   o   o   o   o   o---o   o---o   o
            |   |               |   |       |       |       |       |   |   |
            o   o---o---o---o   o   o   o   o   o   o   o---o   o---o   o   o
            |           |       |   |   |       |       |       |       |   |
            o---o---o   o   o---o   o   o---o---o---o---o   o---o   o   o   o
            |       |   |       |   |       |           |           |   |   |
            o   o   o   o---o   o   o   o   o   o---o   o---o---o---o   o   o
            |   |   |       |   |   |   |       |                   |   |   |
            o   o   o   o---o   o   o---o---o---o   o---o---o   o   o   o   o
            |   |       |       |   |   |       |               |   |   |   |
            o   o   o---o   o---o   o   o   o   o   o---o   o   o   o   o   o
            |   |   |       |   |   |           |   |       |   |   |   |   |
            o   o---o   o---o   o   o   o---o---o---o   o---o   o   o   o   o
            |           |       |   |                       |   |   |   |   |
            o---o   o---o   o   o   o   o---o---o---o---o   o   o   o   o   o
            |           |   |   |   |                           |       |   |
            o---o   o---o   o   o   o---o---o---o---o---o---o   o---o   o   o
            |           |   |   |                           |   |       |   |
            o---o   o---o   o   o   o---o---o---o---o   o   o---o   o---o   o
            |           |   |   |   |           |       |       |       |   |
            o---o   o---o   o   o---o   o---o   o   o   o   o   o---o   o   o
            |               |               |       |       |       |   |   |
            o   o---o---o---o---o   o---o   o---o---o---o   o---o   o   o   o
            |       |       |       |                               |   |   |
            o   o   o   o   o   o   o---o---o---o---o---o   o---o   o   o   o
            |   |       |       |                                   |       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2009-ef', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |                           |                                   |
            o---o   o---o---o---o---o   o   o---o---o---o---o---o---o---o---o
            |           |               |               |                   |
            o---o   o---o   o---o---o---o---o---o---o   o   o   o---o---o   o
            |           |   |               |           |   |           |   |
            o---o   o---o   o   o---o   o---o   o---o---o   o---o   o---o   o
            |           |   |       |       |       |       |       |       |
            o---o   o---o   o---o   o---o   o---o   o   o---o   o   o   o---o
            |           |       |       |   |           |       |   |       |
            o---o   o---o---o   o---o   o   o   o---o---o   o   o   o---o   o
            |           |           |   |       |   |       |       |       |
            o---o   o---o---o---o   o   o---o---o   o   o   o   o---o   o---o
            |       |           |   |   |       |       |   |   |           |
            o   o   o   o---o   o   o   o   o   o   o---o   o   o   o---o   o
            |   |   |       |   |       |                       |           |
            o   o   o---o   o   o---o---o---o---o---o---o---o---o---o   o---o
            |               |   |           |           |       |           |
            o   o   o---o---o   o   o---o   o   o---o   o   o   o---o---o   o
            |   |       |       |   |       |   |   |   |   |           |   |
            o   o   o   o   o   o   o   o---o   o   o   o   o---o---o   o   o
            |       |       |   |   |       |       |   |       |       |   |
            o   o   o   o---o   o   o---o   o---o---o   o---o   o   o---o   o
            |   |                   |           |               |           |
            o   o   o---o---o   o---o   o---o   o---o   o---o---o---o---o   o
            |       |           |       |               |       |           |
            o   o---o   o---o---o   o---o   o---o   o---o   o   o   o---o---o
            |       |       |       |           |           |               |
            o   o   o   o   o   o   o---o---o   o   o---o---o---o---o---o   o
            |   |       |       |               |                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2011-finals', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o   o   o---o---o---o   o   o   o   o   o
            |       |               |   |       |       |   |   |   |   |   |
            o   o   o   o   o---o---o   o   o   o   o   o---o---o   o   o   o
            |   |   |   |           |       |       |                   |   |
            o   o   o   o---o---o   o   o   o   o---o   o   o---o   o   o   o
            |   |   |           |   |   |       |       |           |   |   |
            o   o   o---o   o---o   o   o   o---o   o---o   o   o---o   o   o
            |   |       |   |       |               |       |   |       |   |
            o   o   o---o   o---o   o---o---o---o---o   o   o   o   o---o   o
            |           |       |   |                   |   |       |       |
            o---o   o---o---o   o---o   o---o---o   o   o   o   o---o   o---o
            |                   |                   |           |       |   |
            o---o   o---o---o---o   o---o---o---o   o---o   o   o---o   o---o
            |           |       |       |       |   |       |   |           |
            o---o   o---o   o   o   o   o   o   o---o   o   o---o---o---o   o
            |           |   |   |   |   |       |       |   |       |       |
            o---o   o---o   o   o   o   o   o---o   o   o---o   o   o   o   o
            |   |       |   |   |           |       |   |       |       |   |
            o   o---o   o   o   o---o   o---o   o   o---o   o   o---o---o   o
            |   |           |       |           |   |       |   |           |
            o   o---o---o   o   o   o---o---o---o---o   o   o---o---o---o   o
            |   |       |       |   |   |   |       |   |   |               |
            o   o   o---o---o   o   o   o   o   o   o   o   o   o   o---o   o
            |   |       |       |       |   |   |       |       |   |       |
            o   o   o---o   o   o---o   o   o   o---o---o   o   o---o---o   o
            |       |       |   |   |       |   |   |       |       |       |
            o   o---o   o---o   o   o   o---o   o   o   o---o---o   o---o   o
            |               |   |   |   |       |   |       |               |
            o   o   o---o---o   o   o   o   o---o   o---o   o   o---o   o---o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2011-freshman-final', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o   o---o---o---o   o   o---o   o---o   o---o   o
            |   |   |       |   |           |   |   |   |   |   |       |   |
            o   o   o---o   o   o   o---o   o   o   o   o   o---o---o   o   o
            |   |   |       |   |   |   |   |   |   |   |           |   |   |
            o   o   o---o---o   o   o   o   o   o   o---o   o---o   o   o   o
            |               |   |   |   |   |   |       |       |   |       |
            o---o---o---o   o   o   o   o   o   o---o---o---o---o   o---o   o
            |           |   |   |   |   |   |           |       |       |   |
            o---o---o   o   o   o   o   o   o   o---o---o   o---o   o   o   o
            |           |   |   |   |   |   |   |               |   |   |   |
            o   o---o---o   o   o   o---o   o   o   o---o   o   o   o   o   o
            |               |       |       |   |   |   |   |   |   |       |
            o---o---o   o---o---o---o   o---o---o   o   o   o   o   o   o   o
            |           |               |           |   |   |       |   |   |
            o   o---o   o   o---o---o---o   o   o   o   o   o   o   o   o   o
            |           |               |       |   |   |   |   |   |   |   |
            o---o---o   o   o   o---o   o---o---o   o   o   o   o   o   o   o
            |               |   |   |           |   |   |   |   |   |   |   |
            o   o---o---o   o   o   o   o   o   o   o---o   o   o   o   o   o
            |   |           |   |   |   |   |   |           |   |   |   |   |
            o---o   o---o   o   o   o   o   o   o---o---o   o---o   o   o   o
            |               |   |   |   |   |           |               |   |
            o---o---o---o   o   o   o   o   o   o---o---o---o---o---o---o   o
            |               |   |   |   |   |   |               |   |   |   |
            o   o---o   o---o   o   o   o   o   o   o---o   o---o   o   o   o
            |   |   |   |   |   |           |       |   |           |       |
            o   o   o   o   o   o---o---o   o   o   o   o   o---o---o   o   o
            |   |   |       |   |           |   |   |   |   |   |       |   |
            o   o   o---o   o   o   o---o---o   o   o---o   o---o   o---o   o
            |   |                               |                   |   |   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2011-qualifier', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                       |                       |
            o   o---o---o   o---o   o   o---o---o---o   o   o---o---o   o   o
            |   |   |   |       |   |       |       |   |   |   |       |   |
            o   o   o   o---o---o---o   o   o   o   o   o---o   o   o---o   o
            |       |   |           |   |       |                   |       |
            o---o   o   o   o---o   o   o   o   o---o   o---o   o---o---o   o
            |   |               |   |   |   |   |       |       |           |
            o   o   o   o---o---o   o   o   o   o   o---o   o   o---o---o   o
            |   |   |       |       |               |       |   |           |
            o   o   o---o   o---o   o---o---o---o---o   o   o   o   o---o   o
            |   |   |   |           |                   |       |   |       |
            o   o   o   o---o   o---o   o---o---o---o   o   o---o   o---o   o
            |   |       |       |                           |       |       |
            o   o---o   o   o---o   o---o---o---o---o   o---o   o---o---o   o
            |   |   |       |   |       |       |       |       |           |
            o   o   o---o   o   o   o   o   o   o   o---o---o   o   o---o   o
            |                   |   |   |       |       |       |           |
            o---o   o---o---o   o   o   o   o---o---o   o   o---o   o   o---o
            |   |       |       |   |   |       |       |       |   |   |   |
            o   o---o   o   o   o   o   o   o   o   o---o---o   o   o   o---o
            |   |   |       |   |           |       |   |       |           |
            o   o   o   o   o   o---o---o---o---o---o   o   o---o---o---o   o
            |   |       |   |   |       |   |       |   |   |               |
            o   o   o---o   o   o---o   o   o   o---o   o   o---o   o---o   o
            |       |       |       |   |   |   |   |       |       |       |
            o   o---o   o   o   o   o   o   o   o   o   o---o   o---o---o   o
            |   |       |       |   |       |       |   |   |       |   |   |
            o   o   o   o---o   o   o   o---o   o---o   o   o---o   o   o   o
            |       |               |   |       |           |       |       |
            o   o   o---o   o---o---o   o   o---o   o---o   o   o---o   o---o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2012-ef', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |       |                                       |       |       |
            o   o   o   o---o---o---o   o---o---o---o---o   o   o   o   o   o
            |   |   |   |       |       |                   |   |   |   |   |
            o   o   o   o   o   o   o---o   o---o---o---o---o   o   o   o   o
            |   |       |   |           |                   |   |       |   |
            o   o---o---o   o---o---o---o---o---o---o---o   o   o---o---o   o
            |               |   |                           |           |   |
            o   o---o---o---o   o   o---o---o---o---o---o   o---o---o   o   o
            |   |               |   |               |       |           |   |
            o   o   o---o   o---o   o   o   o---o   o   o---o   o---o   o   o
            |       |       |   |   |   |       |   |       |   |       |   |
            o   o---o   o---o   o   o   o   o   o   o---o   o   o   o---o   o
            |   |               |   |       |   |   |       |           |   |
            o   o   o---o---o   o   o   o   o---o   o   o---o   o---o   o   o
            |       |           |   |   |       |   |   |               |   |
            o   o---o   o---o   o   o   o   o   o   o   o   o---o   o---o   o
            |               |   |   |   |       |   |       |           |   |
            o   o   o---o   o   o   o   o   o---o   o   o---o   o---o---o   o
            |   |       |       |   |   |       |       |           |       |
            o   o---o   o---o   o   o   o   o   o---o---o   o---o---o   o   o
            |                   |       |   |   |           |           |   |
            o---o---o---o---o   o   o   o   o   o   o---o   o---o   o   o   o
            |                   |   |   |       |           |       |   |   |
            o   o---o---o---o   o   o   o   o   o   o---o---o   o---o   o   o
            |           |       |           |   |   |       |   |       |   |
            o---o---o   o---o   o---o---o   o---o   o   o   o   o   o---o   o
            |       |       |           |           |   |   |   |           |
            o   o   o   o   o   o---o   o---o---o---o   o   o   o   o---o---o
            |   |   |   |   |   |                       |       |           |
            o   o   o   o   o   o---o---o---o---o---o---o---o---o---o---o   o
            |   |       |                                                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2013-ef', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |       |                                               |       |
            o   o---o   o---o---o---o---o---o---o---o---o---o   o   o   o   o
            |           |                                   |   |   |   |   |
            o   o---o---o   o   o---o---o---o---o---o---o   o---o   o   o   o
            |       |       |   |                   |           |       |   |
            o   o---o   o---o   o   o---o   o---o   o---o---o   o---o---o   o
            |   |               |   |           |   |       |           |   |
            o   o---o   o---o---o   o---o   o---o   o   o   o   o---o   o   o
            |   |           |       |           |       |   |   |       |   |
            o   o---o   o---o   o---o---o   o---o---o---o   o   o---o   o   o
            |   |           |       |           |       |   |       |   |   |
            o   o   o---o   o---o   o---o   o---o   o   o   o---o   o   o   o
            |   |               |   |               |   |       |   |   |   |
            o   o   o---o---o   o   o---o   o---o---o   o---o   o   o   o   o
            |   |           |   |       |       |       |   |   |   |   |   |
            o   o---o---o   o   o---o   o   o   o   o---o   o   o   o   o   o
            |   |           |   |       |       |       |       |   |   |   |
            o   o   o---o---o   o   o---o---o---o---o   o---o   o   o   o   o
            |   |           |           |       |       |       |   |   |   |
            o   o---o---o   o---o---o   o   o   o   o---o   o---o   o   o   o
            |   |           |       |       |       |   |   |       |   |   |
            o   o   o---o---o   o   o---o---o---o---o   o   o---o   o   o   o
            |   |               |   |               |       |       |   |   |
            o   o   o---o---o---o   o   o   o---o   o---o   o   o---o   o   o
            |   |       |       |       |           |       |   |   |   |   |
            o   o   o   o   o   o---o---o---o---o   o   o---o   o   o   o   o
            |   |   |       |           |       |           |   |       |   |
            o   o   o---o---o   o   o---o   o   o---o---o   o   o   o---o   o
            |   |   |   |   |   |           |                   |   |       |
            o   o   o   o   o---o---o---o---o---o---o---o---o---o   o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2013-eq', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                       |               |                       |
            o   o   o---o---o---o---o   o---o---o   o---o   o   o   o---o   o
            |       |               |   |       |       |           |   |   |
            o   o   o   o---o   o   o   o   o   o---o   o---o---o---o   o---o
            |       |   |   |   |       |           |                       |
            o   o   o   o   o   o---o---o   o   o   o---o---o---o---o---o   o
            |       |   |   |       |               |                       |
            o   o---o   o   o   o---o   o   o   o---o   o---o---o---o---o   o
            |   |       |   |   |               |       |                   |
            o   o   o---o---o   o---o   o   o---o   o---o   o---o---o---o   o
            |   |           |       |       |       |       |           |   |
            o   o---o---o   o---o   o---o---o   o---o   o---o   o   o---o   o
            |                       |           |   |   |   |       |       |
            o   o   o---o   o   o---o   o---o---o---o   o   o---o---o   o   o
            |       |       |       |   |       |       |               |   |
            o   o---o   o---o---o   o   o   o   o   o   o   o---o---o---o   o
            |   |       |       |   |           |   |   |   |           |   |
            o---o   o---o   o   o   o   o---o---o   o   o   o   o---o   o   o
            |       |           |   |               |       |   |   |   |   |
            o   o---o   o   o   o   o---o---o---o---o---o---o   o---o   o   o
            |   |               |   |       |               |       |   |   |
            o   o---o   o   o   o   o---o---o   o---o---o   o   o---o   o   o
            |       |           |   |       |   |       |       |   |       |
            o   o---o   o---o---o   o   o   o   o   o---o---o   o   o---o---o
            |   |       |               |       |   |   |   |   |           |
            o   o---o---o   o   o---o---o---o---o   o   o---o   o   o   o   o
            |               |       |               |           |           |
            o   o   o---o---o---o   o---o   o   o   o   o---o---o   o   o   o
            |   |   |           |       |           |   |                   |
            o   o   o---o---o---o   o   o---o---o---o   o   o   o   o   o   o
            |   |                   |                   |                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2014-maze-finals', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |       |                                                       |
            o   o   o   o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |   |       |                                           |   |
            o   o   o   o---o   o---o---o---o---o---o---o---o---o---o   o   o
            |   |   |   |           |                               |       |
            o   o   o   o---o   o---o   o---o---o---o---o---o---o   o---o---o
            |   |   |   |           |   |                       |       |   |
            o   o   o   o---o   o---o   o   o---o---o---o---o   o---o   o   o
            |   |   |   |           |   |           |           |   |       |
            o   o   o   o---o   o---o   o---o---o   o---o   o   o   o   o   o
            |   |   |   |           |   |   |       |       |   |       |   |
            o   o   o   o   o---o---o   o   o   o---o   o   o---o   o---o   o
            |   |   |   |                       |       |   |               |
            o   o   o   o---o---o---o   o---o---o   o   o---o   o---o   o---o
            |   |   |   |       |       |           |   |                   |
            o   o   o   o   o   o---o   o   o   o   o---o   o---o---o   o---o
            |   |   |   |   |   |       |       |   |           |   |       |
            o   o   o   o   o   o   o---o   o---o---o   o---o---o   o---o   o
            |   |   |   |   |       |           |           |           |   |
            o   o   o   o   o---o---o   o---o---o   o---o---o   o---o   o   o
            |   |   |   |   |   |           |           |           |   |   |
            o   o   o   o   o   o   o---o---o   o---o---o   o   o---o   o   o
            |   |   |   |   |           |           |       |       |   |   |
            o   o   o   o   o   o---o---o   o---o---o   o---o---o   o   o   o
            |   |   |   |           |           |           |       |   |   |
            o   o   o   o   o---o---o   o---o---o   o---o   o   o   o   o   o
            |   |   |   |   |   |           |           |       |   |   |   |
            o   o   o   o---o   o---o   o---o   o   o   o   o   o   o   o   o
            |   |   |   |           |           |   |       |       |   |   |
            o   o   o   o   o---o   o---o---o---o---o---o---o---o   o   o   o
            |   |               |                                   |       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2014-maze-qual', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                           |       |                           |
            o   o---o   o   o---o   o   o   o   o   o---o---o   o   o---o   o
            |   |       |           |       |       |           |       |   |
            o   o   o   o---o---o---o---o   o---o---o   o   o---o---o   o   o
            |       |               |       |           |       |       |   |
            o   o---o---o---o   o   o   o---o   o   o---o---o   o   o---o   o
            |       |           |       |       |       |       |           |
            o   o   o   o   o---o---o   o   o---o---o   o   o---o   o   o---o
            |   |       |       |       |       |       |           |       |
            o   o   o---o---o   o   o---o---o   o   o   o   o---o---o---o   o
            |           |       |       |           |               |       |
            o---o---o   o   o---o---o   o   o---o---o---o---o---o   o   o   o
            |           |               |           |               |   |   |
            o   o   o---o---o   o   o---o---o---o   o   o---o---o---o   o   o
            |   |       |       |       |               |       |       |   |
            o   o   o   o   o---o---o   o   o   o---o---o   o   o   o   o   o
            |       |           |       |       |           |       |       |
            o   o---o---o---o   o   o   o---o---o   o   o---o---o---o---o   o
            |       |               |       |       |       |       |       |
            o   o   o   o   o---o---o---o   o   o---o---o   o   o   o   o---o
            |   |       |           |       |       |           |           |
            o   o   o---o---o   o   o   o   o   o   o   o---o---o---o---o   o
            |   |       |       |       |       |               |           |
            o   o   o   o   o---o---o   o   o---o---o---o   o   o   o   o---o
            |       |           |       |       |           |       |       |
            o   o---o---o---o   o   o---o---o   o   o   o---o---o---o---o   o
            |       |           |       |           |       |               |
            o   o   o   o---o   o   o   o   o---o---o---o   o   o   o   o   o
            |   |       |           |               |           |   |   |   |
            o   o   o---o   o---o   o---o---o---o   o   o---o   o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2015-ef', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                       |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o   o---o   o
            |   |   |       |                                   |       |   |
            o   o   o   o   o   o   o---o---o---o---o   o---o   o---o   o   o
            |   |   |   |   |   |                       |   |       |       |
            o   o   o   o   o   o---o   o---o---o   o---o   o---o   o---o   o
            |   |   |   |   |       |       |       |           |       |   |
            o   o   o   o   o   o---o---o   o   o---o   o   o---o   o---o   o
            |   |   |   |   |           |       |       |           |   |   |
            o   o   o   o   o   o---o---o   o   o---o   o---o   o---o   o---o
            |   |   |   |   |       |       |       |       |   |           |
            o   o   o   o   o   o---o   o---o---o   o---o   o---o---o   o---o
            |   |   |   |       |       |       |       |       |           |
            o   o   o   o   o---o   o---o   o   o---o   o---o   o   o---o   o
            |   |   |   |   |       |               |       |       |       |
            o   o   o   o---o   o---o   o---o---o   o---o   o---o---o   o---o
            |   |       |       |   |       |       |   |       |           |
            o   o   o---o   o---o   o---o   o   o---o   o---o   o---o   o---o
            |   |   |       |           |       |           |       |       |
            o   o---o   o---o   o   o---o   o   o---o   o   o---o   o---o   o
            |   |       |       |           |           |       |       |   |
            o   o---o   o   o---o---o   o---o---o   o---o---o   o   o---o   o
            |   |           |   |           |           |   |       |       |
            o   o---o   o   o   o   o---o   o   o---o   o   o   o---o   o---o
            |       |   |           |   |       |   |           |           |
            o---o   o   o---o   o---o   o---o---o   o---o   o---o---o   o---o
            |       |           |           |           |   |       |       |
            o   o   o---o---o---o   o---o   o   o---o   o---o   o   o---o   o
            |   |                   |               |           |           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2015-eq', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |               |                                               |
            o   o   o---o   o   o   o---o   o   o---o---o---o   o---o---o   o
            |   |       |       |   |   |   |   |           |               |
            o   o---o   o---o---o   o---o   o---o   o---o---o---o---o   o---o
            |               |                                       |       |
            o---o   o---o   o   o---o---o---o   o   o---o---o---o---o   o   o
            |       |   |   |       |       |   |               |       |   |
            o   o   o---o   o   o---o---o   o---o   o---o   o   o   o---o   o
            |   |               |       |       |   |   |   |       |       |
            o   o---o---o   o---o   o   o---o   o   o---o   o---o---o   o   o
            |       |   |   |       |       |   |           |           |   |
            o   o   o   o   o---o   o---o   o---o   o---o   o   o---o   o   o
            |   |       |       |       |       |   |   |   |   |   |   |   |
            o---o   o   o   o---o---o   o---o   o---o   o---o   o---o   o   o
            |       |       |                                               |
            o   o---o   o   o---o---o---o   o   o   o---o---o---o---o---o   o
            |       |   |               |       |       |           |       |
            o   o   o   o---o   o---o   o---o---o---o   o   o---o   o   o---o
            |   |       |   |   |   |   |           |       |   |           |
            o   o---o---o   o   o---o   o   o---o   o---o   o---o   o---o   o
            |       |       |           |   |   |       |               |   |
            o---o   o   o   o---o---o   o   o---o   o   o---o   o---o   o   o
            |   |       |           |   |           |       |       |       |
            o   o   o---o   o---o   o   o---o   o---o   o   o---o   o---o   o
            |   |   |       |   |   |       |       |   |       |       |   |
            o   o   o---o   o---o   o   o   o   o   o   o---o   o---o   o   o
            |       |   |           |   |       |       |   |               |
            o   o---o---o---o   o---o   o   o   o---o   o---o   o   o   o   o
            |   |               |   |       |       |           |   |   |   |
            o   o   o---o---o---o---o   o---o---o   o   o---o   o---o---o   o
            |   |                       |       |                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2016-ef', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |       |                   |       |       |                   |
            o   o   o   o---o---o   o---o   o   o   o   o   o---o---o---o   o
            |   |       |       |   |       |       |   |   |               |
            o   o---o---o   o   o   o   o---o---o   o   o   o   o---o---o---o
            |   |           |       |       |       |   |   |   |           |
            o   o   o---o---o---o---o---o   o   o   o   o   o   o---o   o   o
            |   |   |                       |   |           |   |   |   |   |
            o   o   o   o---o---o---o---o---o---o   o---o---o   o   o   o   o
            |   |   |       |       |       |       |       |       |   |   |
            o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o   o
            |   |       |       |       |       |       |       |       |   |
            o   o   o---o---o---o---o---o   o---o---o---o---o---o---o---o   o
            |   |   |       |           |       |   |   |   |   |           |
            o   o   o   o   o   o---o   o---o---o   o   o   o   o   o---o   o
            |   |   |   |   |   |       |                               |   |
            o   o   o   o   o   o   o---o   o   o   o   o   o   o   o---o   o
            |   |   |   |   |   |       |       |   |   |   |   |           |
            o   o   o   o   o   o   o   o---o---o---o---o---o---o---o   o---o
            |   |   |   |   |   |   |                                       |
            o   o   o   o   o   o---o---o---o---o---o---o---o---o---o---o   o
            |   |   |   |       |       |       |       |       |       |   |
            o   o   o   o---o---o   o   o   o   o   o   o   o   o   o   o   o
            |   |   |               |       |       |       |       |       |
            o   o   o---o---o   o---o---o---o---o---o---o---o---o---o---o---o
            |   |               |   |                               |       |
            o   o   o---o   o---o   o   o---o---o---o---o---o---o   o---o   o
            |   |       |               |                           |       |
            o   o---o   o---o---o---o---o   o---o   o---o   o---o---o   o   o
            |       |                       |   |                       |   |
            o   o   o---o---o---o---o---o---o   o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2016-eq', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |               |                               |   |           |
            o   o   o---o   o---o   o   o---o   o---o   o---o   o---o   o   o
            |   |       |           |       |       |                   |   |
            o   o---o   o---o   o   o---o   o---o   o---o   o---o   o---o   o
            |       |           |       |   |               |       |       |
            o   o   o   o---o---o   o   o   o---o---o   o---o   o   o   o---o
            |   |       |           |           |   |           |       |   |
            o   o---o---o   o   o---o   o---o   o   o---o---o   o---o   o   o
            |       |       |   |       |       |           |       |       |
            o   o   o   o---o   o   o---o   o---o   o---o   o---o   o   o---o
            |   |       |                   |       |           |       |   |
            o   o---o   o   o---o   o   o---o   o---o   o   o---o   o---o   o
            |       |       |       |   |               |       |           |
            o---o   o   o---o   o---o   o   o---o   o---o   o   o---o   o   o
            |   |               |       |       |   |       |           |   |
            o   o   o---o   o   o   o---o   o   o   o   o---o   o---o   o---o
            |       |       |           |       |           |       |       |
            o   o---o   o---o   o---o   o---o---o   o---o   o   o   o---o   o
            |           |           |       |       |       |   |           |
            o   o---o   o---o   o   o---o   o   o---o   o   o   o---o---o   o
            |       |           |           |           |       |           |
            o---o   o---o   o   o---o---o   o---o   o---o---o---o   o   o   o
            |   |           |           |       |   |       |       |   |   |
            o   o---o   o---o   o---o   o---o   o---o   o---o   o---o   o---o
            |   |       |       |       |               |       |           |
            o   o---o   o   o---o   o---o   o---o   o---o   o---o   o---o   o
            |       |       |       |           |       |                   |
            o   o   o   o---o   o   o   o---o   o---o   o---o   o   o   o   o
            |   |       |       |       |       |           |   |   |   |   |
            o   o   o---o   o---o   o---o   o   o   o---o   o   o---o---o   o
            |   |           |               |       |                       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'japan-2017-ef', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |   |                                                           |
            o   o   o   o---o---o---o---o---o---o---o---o---o---o   o   o---o
            |       |   |               |               |       |   |       |
            o   o---o   o   o---o---o   o   o---o---o   o   o   o---o---o   o
            |           |   |       |       |       |       |           |   |
            o   o---o   o   o   o   o---o---o   o   o---o---o---o---o   o   o
            |           |       |               |               |       |   |
            o   o---o---o---o---o---o---o---o---o---o---o---o   o   o---o   o
            |   |       |       |           |           |       |       |   |
            o   o   o   o   o   o   o   o   o   o   o   o   o---o---o   o   o
            |   |   |       |       |   |       |   |       |           |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o   o---o   o
            |   |       |           |               |       |           |   |
            o   o---o   o   o   o---o   o   o---o   o   o   o---o   o---o   o
            |   |       |   |       |   |       |       |               |   |
            o   o   o---o   o---o   o   o   o   o---o---o---o---o   o---o   o
            |   |   |       |       |   |       |   |                   |   |
            o   o   o   o---o   o---o   o---o---o   o   o   o---o---o---o   o
            |   |       |           |                   |               |   |
            o   o---o---o   o---o---o---o---o---o---o---o---o---o---o   o   o
            |   |           |       |   |       |   |           |       |   |
            o   o   o---o---o   o   o   o   o   o   o   o   o---o   o---o   o
            |   |       |       |           |           |   |   |       |   |
            o   o---o   o   o---o---o   o---o---o   o---o   o   o---o   o   o
            |   |       |       |   |   |       |   |       |           |   |
            o   o   o---o---o   o   o---o   o   o---o   o---o   o---o---o   o
            |   |   |           |           |           |   |   |           |
            o   o   o   o---o---o   o---o---o---o---o---o   o   o   o   o   o
            |       |   |   |   |                               |   |   |   |
            o   o---o   o   o   o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'kansai-2017', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |       |                                   |                   |
            o   o   o   o---o---o---o---o---o---o---o   o---o   o---o   o   o
            |   |   |   |                   |   |                       |   |
            o   o   o   o   o---o---o---o   o   o   o---o---o---o   o---o   o
            |   |   |   |   |           |                           |   |   |
            o   o   o   o   o---o   o---o---o---o   o---o---o   o---o   o   o
            |   |   |   |                       |       |           |       |
            o   o   o   o---o---o   o---o   o   o   o   o   o---o---o   o   o
            |   |   |   |   |               |   |   |           |       |   |
            o   o   o   o   o   o---o   o---o   o   o---o   o---o   o---o   o
            |   |   |       |                   |           |       |       |
            o   o   o   o   o---o---o---o   o   o---o---o---o   o---o   o   o
            |   |   |   |               |   |           |       |   |   |   |
            o   o   o   o   o---o---o   o---o---o   o---o   o---o---o   o   o
            |   |   |   |           |   |           |       |               |
            o   o   o   o   o   o---o---o   o   o---o   o   o   o---o---o   o
            |   |   |   |   |   |       |       |       |   |   |   |   |   |
            o   o   o   o   o---o   o   o---o---o   o   o   o   o   o---o   o
            |   |   |       |       |       |       |   |   |   |           |
            o   o   o   o---o   o---o   o---o   o---o   o   o   o   o---o   o
            |   |       |       |       |       |                   |   |   |
            o   o   o   o   o---o   o---o   o   o   o---o---o---o---o---o   o
            |   |   |       |       |       |   |   |                       |
            o   o   o   o---o   o---o   o---o   o   o   o---o---o---o---o   o
            |   |   |   |       |       |   |   |   |               |       |
            o   o   o   o   o---o   o---o---o   o   o---o---o---o   o   o---o
            |   |   |       |       |           |               |           |
            o   o---o   o---o   o---o   o---o   o   o---o---o   o   o---o   o
            |       |   |       |           |   |   |       |       |       |
            o   o   o---o   o---o---o---o---o   o   o---o---o   o---o   o---o
            |   |                                               |       |   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'killer', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o   o   o---o---o---o---o---o   o---o
            |       |       |       |       |               |   |           |
            o---o   o---o   o   o   o   o---o---o---o   o---o   o---o   o---o
            |   |       |   |   |   |       |           |       |           |
            o   o---o   o   o   o---o---o   o---o   o---o   o---o---o   o---o
            |       |       |       |       |       |       |   |           |
            o   o   o---o   o---o   o   o---o   o---o   o---o   o---o   o---o
            |   |       |       |   |   |       |       |       |           |
            o   o---o   o---o   o   o---o   o---o   o---o   o---o---o   o---o
            |   |   |       |       |   |   |       |       |   |           |
            o   o   o---o   o---o   o   o---o   o---o   o---o   o---o   o---o
            |           |       |       |               |       |           |
            o   o---o   o---o   o---o   o   o---o---o---o   o---o---o   o---o
            |       |       |       |   |           |       |   |           |
            o   o---o---o---o   o---o   o   o   o   o   o---o   o---o   o---o
            |       |       |       |   |       |       |                   |
            o   o---o   o---o---o---o   o   o---o---o---o---o   o---o   o---o
            |   |       |       |       |   |   |   |       |   |           |
            o   o   o---o   o---o   o---o   o   o   o---o   o---o---o   o---o
            |       |   |   |       |   |       |       |       |           |
            o   o   o   o   o   o---o   o---o   o---o   o---o   o---o   o---o
            |   |       |       |   |       |       |       |               |
            o   o---o---o   o---o   o---o   o---o   o---o   o---o---o   o---o
            |       |       |   |       |       |       |       |           |
            o   o   o   o---o   o---o   o---o   o---o   o---o   o---o   o---o
            |   |                   |       |       |       |               |
            o---o   o---o   o---o   o---o   o---o   o---o   o---o---o   o---o
            |       |           |       |       |       |       |           |
            o   o---o   o---o---o---o---o---o   o---o   o---o   o---o   o---o
            |   |                                           |               |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'korea-94-x', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |   |               |                                           |
            o   o   o   o---o   o   o   o   o---o---o---o---o---o---o   o   o
            |       |   |           |   |   |       |   |               |   |
            o   o---o   o---o   o---o---o   o---o   o   o   o---o   o---o   o
            |                       |       |               |       |       |
            o---o   o   o   o   o---o   o---o   o---o   o---o   o---o---o   o
            |       |   |   |       |   |   |   |                   |       |
            o---o   o---o   o   o---o   o   o   o   o---o   o---o   o---o   o
            |                               |               |       |       |
            o   o---o---o   o---o   o   o---o   o---o   o---o   o   o---o   o
            |       |               |       |   |       |       |   |       |
            o   o   o   o---o   o---o---o   o---o   o---o   o   o   o---o   o
            |   |               |   |       |               |       |       |
            o   o   o---o   o   o   o   o---o   o---o---o---o---o---o   o---o
            |               |           |       |                           |
            o   o---o---o---o---o---o---o   o   o---o---o---o---o   o---o---o
            |           |   |   |   |   |       |       |                   |
            o---o---o   o   o   o   o   o---o---o---o   o   o---o   o---o   o
            |                               |       |                   |   |
            o   o   o   o   o   o   o   o   o---o   o   o---o---o   o---o   o
            |   |   |   |   |   |   |   |   |       |   |                   |
            o   o   o   o   o   o   o   o   o   o---o   o   o---o   o---o   o
            |   |                           |       |                       |
            o   o   o---o---o   o   o   o---o---o   o---o   o---o   o---o   o
            |   |   |       |   |   |       |       |                       |
            o   o   o   o   o   o   o   o---o   o---o---o   o---o   o---o   o
            |   |   |   |   |   |   |       |           |                   |
            o   o   o---o   o   o---o---o   o---o---o   o   o---o   o---o   o
            |               |       |       |           |                   |
            o   o   o---o---o   o   o   o   o   o---o---o   o---o   o---o   o
            |   |               |       |                                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'kyushu-2017', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                   |                           |
            o   o---o   o---o   o---o---o---o   o   o---o---o   o---o---o   o
            |   |   |   |   |   |   |   |       |           |   |       |   |
            o   o---o   o---o   o---o   o   o---o---o---o   o   o---o   o   o
            |       |   |           |   |                   |           |   |
            o---o   o   o---o   o---o   o---o---o---o---o---o---o---o   o   o
            |   |   |   |   |   |   |   |                   |           |   |
            o---o   o   o---o   o---o   o   o---o---o---o   o   o---o   o   o
            |       |   |               |   |           |   |       |   |   |
            o   o---o   o---o   o---o---o   o---o   o---o   o---o---o   o   o
            |   |   |   |   |   |   |               |                   |   |
            o   o---o   o---o   o---o---o---o---o   o---o---o---o---o   o   o
            |       |   |               |           |                   |   |
            o---o   o   o   o---o---o---o---o---o   o   o---o---o---o---o   o
            |   |   |   |   |                   |   |                   |   |
            o---o   o   o   o   o---o---o   o   o   o---o---o---o---o   o   o
            |       |   |   |           |       |   |               |   |   |
            o   o---o   o---o---o   o---o---o---o   o   o---o   o---o   o   o
            |   |   |   |   |   |       |       |   |   |               |   |
            o   o---o   o   o   o---o   o---o   o   o   o---o---o---o---o   o
            |       |   |   |       |       |   |   |                   |   |
            o---o   o   o   o   o   o---o   o   o   o---o---o---o---o   o   o
            |       |   |   |   |   |   |       |                       |   |
            o   o   o   o   o   o   o   o---o   o---o---o---o---o---o   o   o
            |   |   |   |   |   |           |                       |   |   |
            o   o   o   o   o   o---o---o---o---o---o---o---o   o---o   o   o
            |   |   |   |   |                                   |       |   |
            o   o   o   o   o   o---o---o---o---o---o---o---o---o   o---o   o
            |   |   |   |   |                                       |   |   |
            o   o   o   o   o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |       |                                                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'long', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |       |                                                       |
            o   o   o   o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |   |   |                                               |   |
            o   o   o   o   o---o---o---o---o---o---o---o---o---o---o   o   o
            |   |   |   |   |                                       |   |   |
            o   o   o   o   o   o---o---o---o---o---o---o---o---o   o   o   o
            |   |   |   |   |                                   |   |   |   |
            o   o   o   o   o---o---o---o---o---o---o---o---o   o   o   o   o
            |   |   |   |   |                                   |   |   |   |
            o   o   o   o   o   o---o---o---o---o---o---o---o---o   o   o   o
            |   |   |   |   |                                   |   |   |   |
            o   o   o   o   o---o---o---o---o---o---o---o---o   o   o   o   o
            |   |   |   |   |           |                   |   |   |   |   |
            o   o   o   o   o---o   o   o   o---o---o---o   o   o   o   o   o
            |   |   |   |   |       |   |       |           |   |   |   |   |
            o   o   o   o   o   o---o   o   o   o   o---o---o   o   o   o   o
            |   |   |   |   |       |   |       |           |   |   |   |   |
            o   o   o   o   o---o   o   o---o---o---o---o   o   o   o   o   o
            |   |   |   |   |       |                       |   |   |   |   |
            o   o   o   o   o   o---o---o---o---o---o---o---o   o   o   o   o
            |   |   |   |   |                               |   |   |   |   |
            o   o   o   o   o---o---o---o---o---o---o---o   o   o   o   o   o
            |   |   |   |   |                               |   |   |   |   |
            o   o   o   o   o   o---o---o---o---o---o---o---o   o   o   o   o
            |   |   |   |   |                                   |   |   |   |
            o   o   o   o   o---o---o---o---o---o---o---o---o---o   o   o   o
            |   |   |   |                                           |   |   |
            o   o   o   o---o---o---o---o---o---o---o---o---o---o---o   o   o
            |   |   |                                                   |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'map-1', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |       |   |                                   |   |           |
            o   o   o   o   o   o---o---o   o---o---o---o   o   o   o---o   o
            |   |           |           |   |       |       |       |   |   |
            o   o---o   o---o   o---o   o---o   o   o---o   o   o   o   o   o
            |       |       |                   |   |   |       |       |   |
            o---o   o---o   o---o---o   o---o---o   o   o---o---o---o---o   o
            |           |           |                   |                   |
            o---o---o   o---o   o---o   o---o   o---o---o   o---o---o---o---o
            |               |       |       |       |   |           |       |
            o   o   o---o   o---o   o   o   o---o   o   o---o---o   o---o   o
            |   |   |               |   |               |   |               |
            o   o   o   o---o   o---o---o---o   o---o   o   o---o---o---o   o
            |       |   |                   |   |       |           |       |
            o   o   o   o---o   o---o   o---o---o   o---o   o---o   o---o   o
            |   |   |       |   |   |   |       |   |   |                   |
            o   o---o   o---o   o   o   o   o   o---o   o   o---o---o---o   o
            |           |   |           |       |           |               |
            o   o---o   o   o   o---o   o   o---o---o---o   o   o   o---o   o
            |   |   |   |   |       |       |           |   |   |           |
            o   o   o---o   o---o   o---o---o---o   o   o---o   o---o   o   o
            |                   |           |       |   |               |   |
            o---o---o---o---o   o---o---o   o   o---o   o   o---o---o---o   o
            |               |           |               |   |           |   |
            o   o---o---o   o---o---o   o---o---o---o---o   o   o---o   o   o
            |           |           |   |                   |       |   |   |
            o   o---o   o---o---o   o   o---o---o---o   o   o---o   o   o   o
            |   |   |           |   |   |   |       |   |           |   |   |
            o   o   o---o---o   o   o   o---o   o   o   o---o---o---o   o   o
            |           |       |   |           |   |                       |
            o   o   o---o   o---o   o   o---o---o---o---o   o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'map-2', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o   o---o---o   o---o   o---o---o---o---o---o
            |   |               |   |       |   |   |   |       |   |       |
            o   o   o---o---o   o   o   o   o   o   o   o---o   o   o---o   o
            |   |   |       |   |   |   |   |   |   |   |   |       |       |
            o   o   o---o   o   o   o   o   o   o   o   o   o---o   o---o---o
            |               |   |   |       |   |   |   |   |   |           |
            o   o   o---o---o   o   o---o   o   o   o   o   o   o---o   o   o
            |   |   |       |   |   |           |   |       |           |   |
            o   o   o   o   o   o   o   o---o---o   o   o---o   o---o---o   o
            |   |   |   |   |   |   |       |           |       |   |       |
            o   o---o---o   o   o   o---o   o---o   o---o   o---o   o   o---o
            |               |   |       |               |   |       |       |
            o---o   o---o---o   o   o   o---o---o   o---o   o   o---o---o   o
            |               |   |   |   |       |                   |       |
            o---o---o---o   o   o   o   o   o   o---o---o---o---o   o   o---o
            |       |       |   |       |       |               |   |       |
            o   o   o   o---o---o---o---o---o   o---o   o   o---o   o---o   o
            |   |   |               |               |   |       |   |       |
            o   o   o---o---o   o   o---o---o---o   o   o   o   o   o   o---o
            |   |   |           |   |           |       |   |   |   |       |
            o   o   o   o---o---o   o   o---o   o   o---o   o   o   o---o   o
            |           |       |   |           |   |   |   |   |   |   |   |
            o---o---o   o   o   o---o---o---o   o   o   o   o   o---o   o   o
            |           |   |               |   |   |   |                   |
            o   o---o---o   o   o---o---o---o   o---o   o---o---o---o---o---o
            |                                                               |
            o---o---o---o---o---o---o---o---o---o---o   o---o---o---o---o   o
            |       |       |       |       |       |       |       |       |
            o   o   o   o   o   o   o   o   o   o   o   o   o   o   o---o   o
            |   |       |       |       |       |       |       |           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'map-3', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |           |                               |                   |
            o   o---o   o   o---o---o---o---o---o---o   o   o---o---o---o   o
            |   |   |       |                   |   |       |           |   |
            o   o   o---o---o   o---o---o   o   o   o---o---o   o---o   o   o
            |   |           |   |       |   |   |               |   |   |   |
            o   o   o---o---o   o   o---o   o   o   o---o---o---o   o---o   o
            |   |           |   |       |   |                           |   |
            o   o---o---o   o   o---o   o   o---o---o---o---o   o   o   o   o
            |   |           |                   |   |       |   |   |   |   |
            o   o   o---o---o   o---o---o---o   o   o---o---o   o   o   o   o
            |   |   |       |       |       |   |   |       |   |   |   |   |
            o   o   o   o   o---o---o   o   o   o   o---o   o   o   o   o   o
            |   |       |           |   |           |   |   |   |   |   |   |
            o   o   o---o---o   o   o   o---o---o---o   o   o   o   o   o   o
            |               |   |       |               |   |   |       |   |
            o---o---o---o   o---o---o---o   o   o---o   o   o   o---o---o   o
            |               |           |       |   |   |   |           |   |
            o---o   o---o---o   o---o---o---o---o---o   o   o---o   o   o   o
            |                   |           |   |   |   |           |   |   |
            o---o   o---o---o   o---o---o   o   o---o   o---o---o   o   o   o
            |   |       |                   |   |                   |   |   |
            o   o---o   o   o   o   o---o---o   o---o---o---o---o   o   o   o
            |   |       |   |   |               |               |   |   |   |
            o   o   o---o   o   o   o---o---o---o   o   o---o---o   o   o   o
            |   |           |   |               |   |               |   |   |
            o   o---o   o---o   o   o---o---o   o   o---o---o---o---o   o   o
            |       |   |       |   |       |   |   |                   |   |
            o---o   o---o   o---o---o   o   o   o   o---o---o---o---o   o   o
            |                           |       |                       |   |
            o   o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'map-4', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                   |   |                       |       |       |
            o   o---o   o---o   o   o   o---o---o---o---o---o---o   o---o   o
            |   |       |   |   |       |       |                           |
            o   o---o   o   o   o   o---o   o---o   o---o---o   o---o---o   o
            |       |   |   |   |   |       |       |           |   |   |   |
            o   o---o   o   o   o   o   o   o   o---o   o---o   o   o   o   o
            |   |       |   |   |   |   |       |       |           |   |   |
            o---o   o---o   o   o   o---o   o---o   o---o   o   o---o   o   o
            |       |       |   |   |       |       |       |   |       |   |
            o   o---o   o---o   o   o   o---o   o---o   o---o---o   o---o   o
            |   |               |       |   |   |       |   |               |
            o   o---o---o---o   o   o---o   o   o   o   o   o   o   o   o---o
            |   |           |   |   |       |   |   |   |       |   |       |
            o   o   o   o   o   o   o   o---o---o   o---o---o---o   o---o   o
            |   |   |   |       |   |   |           |           |           |
            o   o   o   o   o   o---o   o   o   o---o---o   o---o   o---o   o
            |       |   |   |           |       |   |   |   |   |   |       |
            o   o---o---o   o---o---o   o---o---o   o   o   o   o---o   o   o
            |   |                   |                                   |   |
            o   o   o---o---o---o   o---o---o---o---o---o---o---o---o---o   o
            |   |   |           |   |                                       |
            o---o   o   o---o   o   o   o---o---o---o---o---o---o---o   o   o
            |       |   |   |   |   |                               |   |   |
            o   o---o   o   o   o   o   o---o---o---o---o---o---o   o   o   o
            |   |   |   |   |       |   |                           |   |   |
            o   o   o   o   o---o   o   o   o---o---o---o---o---o---o   o   o
            |   |                   |   |                           |   |   |
            o   o   o---o---o---o---o   o---o---o---o---o---o---o   o   o   o
            |   |   |   |                                       |   |   |   |
            o   o   o   o---o---o---o---o---o---o---o---o---o---o   o   o   o
            |   |                                                   |       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'map-5', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |               |               |       |           |           |
            o   o---o---o   o   o   o---o---o   o   o   o   o   o   o---o   o
            |           |   |   |               |   |   |   |       |       |
            o---o---o   o   o   o---o---o---o   o   o   o   o---o---o---o   o
            |           |   |       |           |   |   |   |       |       |
            o   o   o   o   o---o   o   o---o---o   o   o---o   o   o---o   o
            |   |   |   |           |           |   |   |       |           |
            o   o   o   o---o---o---o   o   o---o   o   o   o---o---o---o---o
            |   |   |   |           |   |       |   |   |   |               |
            o   o   o   o   o---o   o---o---o   o   o   o   o   o---o---o   o
            |   |   |   |   |   |       |       |   |   |       |           |
            o   o   o---o   o   o   o   o   o---o   o   o   o---o   o---o---o
            |   |       |   |   |   |   |   |           |   |   |   |       |
            o   o---o---o   o   o   o   o---o---o---o---o---o   o   o   o   o
            |       |       |   |   |   |       |           |       |   |   |
            o---o   o   o---o   o   o---o   o   o---o---o   o---o   o   o   o
            |       |   |   |   |       |       |   |           |       |   |
            o   o---o   o   o   o   o---o---o   o   o---o---o   o---o---o   o
            |   |           |   |       |       |   |                   |   |
            o   o   o---o   o   o   o---o   o---o   o---o---o---o---o   o   o
            |       |   |       |   |   |       |   |       |       |       |
            o---o---o   o---o---o   o   o---o   o   o   o   o   o   o---o   o
            |                   |       |       |       |       |           |
            o   o---o---o---o   o---o   o   o---o---o---o---o---o---o---o   o
            |   |   |   |   |       |       |   |           |   |   |   |   |
            o   o   o   o   o---o   o---o---o   o   o---o   o   o   o   o   o
            |                   |       |   |   |       |       |       |   |
            o---o---o---o---o   o---o   o   o   o---o   o   o---o   o---o   o
            |       |   |   |       |       |       |   |   |   |   |       |
            o   o   o   o   o---o   o   o---o   o   o   o   o   o   o---o   o
            |   |                   |           |       |                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'map-6', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                       |                   |   |               |
            o   o---o---o   o---o---o   o---o   o---o   o   o   o---o   o   o
            |   |       |   |                       |   |       |   |   |   |
            o   o   o   o---o   o---o---o---o---o   o---o   o---o   o---o   o
            |       |   |           |           |                           |
            o   o---o---o---o   o---o---o   o   o---o   o---o---o   o---o   o
            |   |       |               |   |   |               |   |   |   |
            o   o---o   o---o---o---o   o---o   o---o---o---o   o---o   o   o
            |       |   |       |               |                           |
            o   o---o   o---o   o   o---o---o---o   o---o   o---o---o   o   o
            |   |           |   |   |       |       |               |   |   |
            o   o   o---o   o   o   o   o---o   o---o   o---o---o---o   o   o
            |   |       |   |   |   |   |       |       |                   |
            o   o---o---o   o   o   o   o---o---o   o   o   o   o---o---o   o
            |       |       |           |           |   |   |   |       |   |
            o---o   o   o   o   o   o   o   o   o---o   o   o   o---o   o   o
            |       |   |   |   |   |   |       |       |   |           |   |
            o   o---o   o---o   o   o   o---o---o   o---o   o---o---o   o   o
            |   |               |   |       |                   |           |
            o   o---o   o   o---o   o---o---o---o---o---o---o   o   o---o   o
            |   |       |   |   |               |           |       |       |
            o   o---o   o---o   o---o---o---o---o   o   o   o---o---o---o   o
            |       |       |               |       |   |       |       |   |
            o   o---o---o   o---o   o---o   o---o---o   o---o---o   o---o   o
            |   |                           |           |       |           |
            o   o---o   o---o---o   o---o---o   o---o   o   o   o---o---o---o
            |       |   |       |   |   |       |   |   |   |   |           |
            o   o   o   o   o   o   o   o   o   o   o---o   o---o   o---o   o
            |   |   |       |       |   |   |   |                       |   |
            o   o   o---o---o---o   o   o---o   o---o   o---o   o---o   o   o
            |   |                                                   |       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'map-7', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o   o---o---o---o---o   o---o---o---o---o   o---o---o   o
            |   |   |   |               |   |                               |
            o   o---o   o   o---o---o   o   o   o---o---o---o   o---o---o   o
            |           |   |       |   |   |   |           |   |       |   |
            o   o---o   o   o---o---o   o   o   o   o---o   o   o   o---o   o
            |   |   |   |               |   |   |   |   |   |   |   |       |
            o   o   o   o   o---o   o---o   o   o   o   o   o   o   o---o   o
            |   |   |   |   |   |   |       |   |   |   |   |   |       |   |
            o   o   o   o   o   o---o---o   o   o   o---o   o   o---o   o   o
            |   |   |   |   |       |   |   |   |           |       |   |   |
            o   o---o   o---o   o   o---o---o   o---o---o---o   o---o   o   o
            |                   |           |           |       |       |   |
            o   o---o   o---o---o---o---o---o---o---o   o---o   o---o---o   o
            |   |   |   |               |       |       |                   |
            o   o   o---o   o---o---o   o   o   o   o---o---o---o---o   o   o
            |                           |       |   |               |   |   |
            o   o---o   o   o---o   o---o---o   o   o   o---o---o---o   o   o
            |   |   |   |   |   |   |       |       |   |               |   |
            o---o   o---o   o   o   o   o   o---o---o   o---o---o---o   o   o
            |   |           |   |   |   |       |                   |   |   |
            o   o   o---o---o   o---o   o   o   o---o   o---o---o---o   o   o
            |                           |   |       |   |                   |
            o   o---o   o---o---o---o   o   o---o   o   o---o---o---o---o   o
            |       |   |               |       |   |       |               |
            o---o---o   o   o---o   o   o   o   o   o   o   o---o   o---o   o
            |           |           |       |   |   |   |           |       |
            o   o---o   o   o   o---o   o---o   o---o   o---o   o---o   o   o
            |   |   |       |   |                               |       |   |
            o   o   o   o   o---o---o---o   o---o---o---o---o   o   o---o   o
            |   |       |                                                   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'porto-2017', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |       |       |                                               |
            o   o   o   o---o---o   o---o---o---o---o   o   o---o   o---o   o
            |   |   |       |       |       |       |   |                   |
            o   o   o   o   o   o   o   o   o   o   o   o   o---o   o---o   o
            |       |   |   |   |       |       |   |       |       |       |
            o   o   o   o   o   o   o   o   o   o   o   o---o   o---o   o   o
            |   |   |   |   |       |       |   |       |       |       |   |
            o   o   o   o   o---o   o   o   o   o   o---o   o---o   o---o   o
            |       |   |   |   |       |           |       |       |       |
            o   o   o   o   o   o---o   o   o   o---o   o---o   o---o   o   o
            |   |   |   |   |               |   |       |       |       |   |
            o   o   o   o   o---o---o---o   o   o   o---o   o---o   o---o   o
            |       |   |   |       |               |       |       |       |
            o   o   o   o   o   o---o   o---o---o---o   o---o   o---o   o   o
            |   |       |   |       |   |           |   |   |   |       |   |
            o   o   o---o   o---o   o   o   o   o   o   o   o   o   o---o   o
            |       |       |       |   |       |                           |
            o   o   o   o   o   o   o   o---o---o---o---o---o---o---o---o---o
            |   |   |   |       |   |           |       |       |       |   |
            o   o   o   o---o   o   o---o   o   o   o   o   o   o   o   o   o
            |       |       |           |   |       |       |       |       |
            o   o   o   o   o---o   o---o   o   o   o   o   o   o   o   o   o
            |   |   |   |       |       |       |       |       |       |   |
            o   o   o   o---o   o---o   o   o   o   o   o   o   o   o   o   o
            |       |       |       |   |   |       |       |       |       |
            o   o   o   o   o---o   o   o---o---o---o---o---o---o---o---o   o
            |   |   |   |       |       |       |       |       |       |   |
            o   o   o   o---o   o---o   o   o   o   o   o   o   o   o   o   o
            |       |                   |   |       |       |       |       |
            o   o   o   o---o   o---o   o   o   o   o   o   o   o   o   o   o
            |   |   |                           |       |       |       |   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'taiwan-2015-finals', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o---o   o
            |       |                                                   |   |
            o---o   o   o---o   o---o   o   o---o   o---o   o---o   o---o   o
            |   |   |       |   |   |   |   |       |       |   |           |
            o   o   o   o---o   o   o   o   o---o   o   o---o   o   o---o   o
            |       |   |       |   |   |       |       |           |       |
            o   o---o   o---o   o---o   o   o---o   o---o---o   o   o   o   o
            |       |                               |           |       |   |
            o---o   o---o   o---o   o---o---o---o   o---o   o---o   o---o   o
            |       |   |   |   |   |       |       |       |       |       |
            o   o---o   o---o   o   o---o   o   o   o   o---o---o   o   o   o
            |       |           |   |           |               |       |   |
            o---o   o   o---o   o---o   o---o---o   o   o---o   o   o   o   o
            |       |           |       |       |   |       |   |   |       |
            o   o   o   o---o---o   o---o   o   o   o---o   o   o   o   o   o
            |   |   |   |           |   |       |               |       |   |
            o   o   o   o---o   o---o   o   o---o---o---o---o---o---o   o   o
            |       |   |           |       |       |               |       |
            o   o   o   o   o---o---o   o   o   o---o   o---o---o   o   o   o
            |   |       |       |       |       |       |   |   |       |   |
            o   o---o   o---o   o   o---o---o   o---o---o   o   o---o   o   o
            |               |               |                       |       |
            o   o---o   o---o---o---o---o   o---o---o---o---o   o---o---o   o
            |           |               |   |   |                       |   |
            o   o   o---o   o---o   o---o---o   o---o   o---o   o---o   o   o
            |   |       |                       |   |           |   |   |   |
            o   o   o   o---o   o---o   o---o   o   o---o   o---o   o---o   o
            |       |   |                   |           |                   |
            o   o   o---o   o---o   o---o   o   o   o   o   o---o   o   o   o
            |   |                               |   |   |       |   |   |   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'taiwan-2016-maze', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o---o---o   o   o
            |       |       |                                       |   |   |
            o   o---o   o   o---o   o---o---o---o---o---o---o---o   o---o   o
            |   |       |       |                           |               |
            o   o---o   o---o   o---o---o---o---o---o---o   o---o---o---o   o
            |   |   |       |   |   |           |   |               |       |
            o   o   o   o---o   o   o   o---o   o   o   o---o---o   o---o---o
            |   |       |       |       |   |           |   |       |       |
            o   o---o   o---o   o   o---o   o---o---o---o   o---o---o   o---o
            |   |   |       |       |       |           |                   |
            o   o   o   o---o   o---o   o   o   o   o---o---o---o   o---o   o
            |   |       |       |       |       |           |               |
            o   o---o   o---o---o   o---o---o---o---o   o---o   o---o   o   o
            |       |       |           |       |       |       |       |   |
            o   o   o---o   o---o   o   o   o   o   o   o   o---o   o---o---o
            |   |   |   |       |   |   |       |   |   |   |               |
            o   o   o   o   o   o   o---o   o---o---o   o   o   o---o---o---o
            |   |       |   |   |       |   |   |       |   |               |
            o   o   o   o---o   o   o---o   o   o   o   o   o---o---o---o   o
            |   |   |       |   |       |           |   |   |               |
            o   o---o---o   o   o---o   o---o   o   o---o   o   o---o---o---o
            |   |   |       |       |       |   |   |       |               |
            o   o   o   o---o   o   o---o   o---o---o   o   o---o   o---o   o
            |   |       |   |   |   |           |   |   |   |   |       |   |
            o   o   o---o   o---o   o---o   o---o   o   o---o   o---o   o   o
            |   |       |           |           |       |                   |
            o   o---o   o---o---o   o---o   o---o   o---o   o---o---o---o   o
            |   |       |       |                       |   |       |   |   |
            o   o   o---o   o   o---o---o---o---o---o---o---o   o   o   o   o
            |   |           |                                   |           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'taiwan-2017', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o   o---o   o   o---o   o---o---o   o---o   o---o   o---o
            |       |   |   |   |   |   |       |       |                   |
            o   o---o   o   o   o   o   o   o   o   o---o   o---o   o---o   o
            |   |       |   |   |       |   |           |                   |
            o   o---o   o---o   o   o   o   o   o---o---o---o   o---o   o---o
            |                       |           |                           |
            o   o---o   o---o---o   o---o   o---o   o---o   o---o   o---o   o
            |   |           |               |                               |
            o   o   o   o   o   o---o   o---o   o---o   o---o   o---o   o---o
            |       |   |               |                                   |
            o---o   o   o   o---o   o---o   o---o   o---o   o---o   o---o   o
            |   |                       |                                   |
            o   o---o   o---o   o---o   o---o---o---o   o---o   o---o   o---o
            |   |                       |       |   |                       |
            o   o---o---o   o---o   o---o   o   o   o---o   o---o   o---o   o
            |   |   |                   |           |                       |
            o   o   o   o---o   o---o   o---o---o   o   o---o   o---o   o---o
            |       |                   |           |                       |
            o---o   o---o   o---o   o---o   o---o   o---o   o---o   o---o   o
            |       |   |                   |       |                       |
            o   o   o   o---o   o---o   o---o   o---o   o---o   o---o   o---o
            |   |       |   |                       |                       |
            o   o---o   o   o---o   o---o   o---o---o---o   o---o   o---o   o
            |       |       |                   |                           |
            o   o---o   o   o---o---o---o---o---o---o---o---o---o---o   o---o
            |       |   |       |       |   |   |   |   |   |   |   |       |
            o   o---o   o   o   o   o   o   o   o   o   o   o   o   o---o   o
            |       |       |       |                                       |
            o   o   o---o   o   o   o   o   o   o   o   o   o   o   o   o   o
            |   |   |       |   |       |   |   |   |   |   |   |   |   |   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'uk-nov-2015-maze-b', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o   o---o---o   o
            |       |               |                                   |   |
            o   o   o   o---o---o   o   o   o---o---o---o   o   o---o   o   o
            |   |   |           |   |   |   |               |   |       |   |
            o   o   o---o---o   o   o   o   o   o---o   o   o   o   o---o   o
            |   |   |           |   |   |       |       |   |   |   |       |
            o   o   o   o---o---o   o   o   o---o   o---o   o   o   o   o   o
            |   |   |   |       |       |                   |   |       |   |
            o   o   o   o   o   o---o---o---o   o   o---o   o   o---o---o   o
            |   |   |   |   |   |               |           |           |   |
            o   o   o   o   o   o   o---o   o---o---o   o   o   o   o   o   o
            |       |           |   |                   |   |   |   |       |
            o---o   o   o---o---o   o   o   o---o   o   o   o   o   o---o   o
            |                   |       |       |   |   |   |   |           |
            o   o   o   o---o   o   o---o   o   o   o   o   o   o   o---o   o
            |   |   |           |       |       |       |       |           |
            o   o   o---o   o---o---o   o---o---o   o---o---o---o---o---o   o
            |       |               |           |   |               |       |
            o   o   o   o---o   o   o   o---o   o---o   o   o   o   o   o   o
            |   |       |       |   |           |       |   |   |       |   |
            o   o---o---o   o---o   o---o---o---o   o---o   o   o---o   o   o
            |               |                                       |       |
            o---o   o   o---o   o---o---o---o   o---o---o   o---o   o---o   o
            |       |                                                       |
            o   o   o   o---o---o---o---o   o---o   o   o   o   o   o   o   o
            |   |                               |   |   |   |   |   |   |   |
            o   o   o---o---o   o---o   o---o   o   o   o   o   o   o   o   o
            |                                                               |
            o   o   o---o   o---o   o---o---o   o   o   o   o   o   o   o   o
            |   |                               |   |   |   |   |   |   |   |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'uk-nov-2017', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |   |                   |                                       |
            o   o---o---o   o---o   o   o---o---o   o---o---o---o---o---o   o
            |           |   |       |       |                           |   |
            o   o---o   o   o   o---o   o   o   o---o---o---o---o   o   o   o
            |       |   |   |   |       |   |               |       |       |
            o   o   o   o   o   o---o   o   o   o---o   o   o   o---o---o   o
            |   |   |       |       |   |   |           |           |       |
            o---o   o---o   o---o   o---o   o   o---o   o   o---o---o   o   o
            |       |   |   |       |       |                   |       |   |
            o   o   o   o   o   o   o   o   o   o---o   o---o---o   o---o   o
            |   |   |       |   |       |   |   |           |       |       |
            o   o---o   o   o   o   o   o   o   o   o---o---o   o---o   o   o
            |       |   |   |       |   |   |           |       |       |   |
            o   o   o---o   o---o---o---o---o   o---o---o   o---o   o---o   o
            |   |       |               |       |   |                       |
            o---o---o   o---o   o---o   o   o   o   o   o---o---o   o---o---o
            |       |       |           |       |               |   |       |
            o   o   o---o   o---o   o   o---o---o---o---o---o   o---o   o   o
            |   |       |       |   |       |                       |   |   |
            o   o---o   o   o---o---o   o   o   o---o   o   o---o---o   o   o
            |               |       |   |   |   |       |   |           |   |
            o---o---o---o   o   o   o---o   o   o   o   o   o   o---o---o   o
            |               |   |           |       |                   |   |
            o   o---o---o   o   o   o---o---o---o   o---o   o---o   o   o   o
            |               |   |   |   |   |   |       |           |   |   |
            o   o---o   o---o   o   o   o   o   o---o   o---o---o   o---o   o
            |       |   |       |                   |       |       |       |
            o   o   o   o   o   o   o   o   o   o   o---o   o---o---o   o   o
            |   |   |       |       |   |   |   |       |               |   |
            o   o   o---o---o---o---o---o---o   o---o   o---o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'uk-robofest-2015-maze', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |       |       |       |                                       |
            o   o   o   o   o   o   o   o---o   o---o---o   o---o---o   o   o
            |   |   |   |   |   |       |       |                       |   |
            o   o   o   o   o   o   o   o   o   o   o---o   o---o---o   o   o
            |   |       |   |       |   |   |                       |       |
            o   o   o   o   o   o   o   o   o   o---o   o---o---o   o---o   o
            |       |   |   |   |   |   |       |                           |
            o   o---o   o   o   o   o   o   o---o   o---o---o   o   o---o   o
            |       |   |   |   |   |   |   |                   |           |
            o---o   o   o   o   o   o   o   o   o---o---o---o   o   o---o---o
            |       |   |   |   |   |   |                   |   |   |       |
            o   o---o   o   o   o   o   o   o---o---o   o   o   o   o   o   o
            |       |       |   |   |   |           |   |       |       |   |
            o---o   o   o   o   o   o   o---o---o   o   o---o---o---o---o   o
            |       |   |       |   |   |       |   |                   |   |
            o   o---o   o   o   o   o   o   o   o   o   o---o   o---o   o   o
            |       |   |   |           |       |   |                   |   |
            o---o   o   o   o   o---o---o---o   o   o---o   o---o   o---o   o
            |       |   |       |       |       |       |               |   |
            o   o---o   o   o---o   o   o---o   o---o   o---o   o---o   o   o
            |       |       |       |       |       |       |           |   |
            o---o   o---o---o   o---o---o   o---o   o---o   o---o   o---o   o
            |                   |       |       |       |       |       |   |
            o   o---o---o   o   o   o   o---o   o---o   o---o   o---o   o   o
            |       |       |   |   |       |       |       |       |   |   |
            o---o   o   o   o   o   o   o   o---o   o---o   o---o   o   o   o
            |       |   |       |   |   |       |       |       |       |   |
            o   o   o   o   o   o   o   o---o   o---o   o---o   o---o   o   o
            |   |   |   |   |   |   |                       |           |   |
            o   o   o   o   o   o   o   o---o---o---o---o   o---o---o---o   o
            |   |                   |                                       |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'uk-2016-final', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o   o---o---o---o   o---o---o---o---o   o
            |       |                                   |                   |
            o---o   o   o   o---o---o---o---o---o   o---o   o---o   o   o   o
            |       |   |                                   |       |   |   |
            o   o   o   o---o   o---o---o   o---o---o---o   o   o   o   o   o
            |   |   |   |       |                           |   |   |       |
            o   o   o   o   o   o   o---o---o---o---o---o   o   o   o   o   o
            |       |       |       |                   |       |       |   |
            o   o---o---o   o---o   o   o---o---o---o   o---o   o   o   o   o
            |   |       |       |   |                       |   |   |   |   |
            o   o   o   o---o   o   o   o---o   o   o   o   o   o   o   o   o
            |   |   |       |   |   |           |   |   |   |       |   |   |
            o   o   o---o   o   o   o   o---o---o   o   o   o   o---o   o   o
            |   |       |           |   |       |   |   |   |   |       |   |
            o   o---o   o---o---o---o   o   o   o   o   o   o   o   o---o   o
            |       |   |               |           |       |   |   |       |
            o   o   o   o   o---o---o   o---o---o---o   o   o   o   o   o---o
            |   |   |   |               |               |   |       |       |
            o   o   o   o---o---o---o---o   o---o---o---o   o   o   o   o   o
            |   |   |                   |                   |   |   |   |   |
            o   o   o   o   o---o---o   o---o---o---o   o   o   o   o   o   o
            |       |   |       |                       |   |   |   |   |   |
            o   o---o   o   o   o   o---o---o   o---o---o   o   o   o   o   o
            |   |       |   |                               |       |   |   |
            o   o   o---o   o   o---o   o---o---o---o---o---o   o   o   o   o
            |   |       |                           |           |   |       |
            o   o---o   o   o---o---o---o---o---o   o   o---o---o---o   o---o
            |       |       |                   |       |                   |
            o   o   o---o---o   o---o---o---o   o---o---o   o---o---o---o   o
            |   |                                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
    { 
        name: 'uk-2016-heat', 
        data: `
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
            |                                                               |
            o   o---o---o---o---o---o---o---o---o---o---o---o   o   o---o   o
            |   |                               |   |   |   |   |       |   |
            o   o---o---o---o   o---o   o   o   o   o   o   o   o   o---o   o
            |               |       |   |   |                           |   |
            o---o---o---o   o   o---o   o   o   o---o---o   o---o---o   o   o
            |               |   |                           |           |   |
            o   o   o---o---o   o---o---o---o---o   o---o   o---o   o---o   o
            |   |   |                               |   |   |           |   |
            o   o   o---o---o---o---o---o---o---o---o   o   o   o---o   o   o
            |           |               |                           |       |
            o---o   o---o---o---o   o   o---o   o---o   o---o   o   o---o   o
            |                   |   |           |       |       |       |   |
            o   o   o---o---o   o---o   o---o---o   o   o   o---o   o   o   o
            |   |           |       |   |       |   |   |   |       |   |   |
            o---o   o---o   o---o   o---o   o   o---o   o   o---o---o   o   o
            |           |       |       |               |   |       |   |   |
            o   o---o   o---o   o---o   o---o---o---o---o---o   o   o   o   o
            |       |   |   |       |       |                   |       |   |
            o---o   o   o   o---o   o---o   o---o   o---o---o---o---o   o   o
            |                                   |                   |   |   |
            o   o   o   o---o   o---o---o---o   o---o   o---o   o---o   o   o
            |   |   |   |   |       |       |       |       |       |   |   |
            o   o---o---o   o---o   o   o   o---o   o---o   o   o---o   o   o
            |                   |   |   |       |       |       |       |   |
            o   o---o   o   o   o   o   o   o   o---o   o---o   o---o   o   o
            |   |   |   |   |   |       |   |       |       |       |   |   |
            o   o   o---o---o   o   o   o   o   o   o---o   o---o   o   o   o
            |   |               |   |       |   |       |       |   |   |   |
            o   o   o---o---o   o   o---o   o   o---o   o---o   o   o---o   o
            |   |               |                                           |
            o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o---o
        ` 
    },
];

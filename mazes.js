var mazeData = [
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
];

var JSVEECSharp = function() {};

JSVEECSharp.addToHead = function(params) {
    return '<script src="/static/jsvee-csharp/JSVEE-min.js" type="text/javascript"></script>\n' +
           '<script src="/static/jsvee-csharp/JSVEE-csharp-min.js" type="text/javascript"></script>\n' +
           '<script src="/static/jsvee-csharp/JSVEE-content-min.js" type="text/javascript"></script>\n' +
           '<link href="/static/jsvee-csharp/jsvee.css" rel="stylesheet">\n' +
           '<link href="/static/jsvee-csharp/jsvee-csharp.css" rel="stylesheet">\n' +
           '<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" type="text/css">' +
           '<link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" type="text/css">';
};

JSVEECSharp.addToBody = function(params) {
    return '';
};

JSVEECSharp.initialize = function(req, params, handlers, cb) {

    // Initialize the content package
    params.headContent += JSVEECSharp.addToHead(params);
    params.bodyContent += JSVEECSharp.addToBody(params);

    cb();

};

JSVEECSharp.register = function(handlers) {
    handlers.contentPackages['jsvee-csharp'] = JSVEECSharp;
    handlers.contentTypes.jsvee.installedContentPackages.push(JSVEECSharp);
};

JSVEECSharp.namespace = 'jsvee-csharp';
JSVEECSharp.contentTypeNamespace = 'jsvee';
JSVEECSharp.packageType = 'content';

JSVEECSharp.meta = {
    'name': 'jsvee-csharp',
    'shortDescription': 'JSVEE-pakkaus, joka sisältää C#-esimerkkejä.',
    'description': '',
    'author': 'Teemu Sirkiä',
    'license': 'MIT',
    'version': '0.1.0',
    'url': '',
    'teaserContent' : ['hello', 'olioviitteet'],
    'contents':     {
        'hello': {
            'description': '',
            'order': 0,
            'title': 'hello'
        },
        'kutsuminen': {
            'description': '',
            'order': 1,
            'title': 'kutsuminen'
        },
        'olioviitteet': {
            'description': '',
            'order': 2,
            'title': 'olioviitteet'
        },
        'rekursio': {
            'description': '',
            'order': 3,
            'title': 'rekursio'
        },
        'merkkijono': {
            'description': '',
            'order': 4,
            'title': 'merkkijono'
        }
    }
};

module.exports = JSVEECSharp;

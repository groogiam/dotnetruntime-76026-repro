
self.importScripts('./service-worker-assets.js');

/* Uno Bootstrapper */
self.importScripts('./offline-server/offline-server-package-config.js');
const offlineServerBasePath = "./offline-server/" + offlineServerPackageName;
self.importScripts(offlineServerBasePath + '/require.js');
self.importScripts(offlineServerBasePath + '/mono-config.js');
self.importScripts(offlineServerBasePath + '/uno-config.js');
self.config.uno_dependencies = [];
self.importScripts(offlineServerBasePath + '/uno-bootstrap.js');
//fix for dll lookup path issue.
Module["locateFile"] = function (path, scriptDirectory) {
    return scriptDirectory + "offline-server/" + offlineServerPackageName + "/" + path;
}
self.importScripts(offlineServerBasePath + '/dotnet.js');

// In development, always fetch from the network and do not enable offline support.
// This is because caching would make development more difficult (changes would not
// be reflected on the first load after each change).
self.addEventListener('fetch', () => { });

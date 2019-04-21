self.addEventListener("install", (e) => {
    console.log("[Install] service worker");
});

self.addEventListener("activate", (e) => {
    console.log("[Activate] service worker");
});

self.addEventListener("fetch", (e) => {});

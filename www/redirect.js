export default {
  fetch(request) {
    const url = new URL(request.url);
    url.hostname = 'capycanvas.art';
    return Response.redirect(url, 301);
  },
};

/**
 * دالة تشغيل الفيديو مع تشفير الرابط
 */
function watchVideo(courseId, courseTitle, videoUrl) {
    if (!videoUrl) {
        alert('عذراً، لا يوجد فيديو متاح لهذا الدرس.');
        return;
    }

    // تشفير الرابط قبل إرساله
    function _mask(u) {
        try {
            const encoded = btoa(unescape(encodeURIComponent(u)));
            return encoded.split('').reverse().join('');
        } catch (e) { return u; }
    }

    const params = new URLSearchParams();
    params.append('courseId', courseId);
    params.append('title', courseTitle);
    params.append('url', _mask(videoUrl));  // مشفّر
    params.append('t', Date.now());

    window.location.href = `video-player.html?${params.toString()}`;
}

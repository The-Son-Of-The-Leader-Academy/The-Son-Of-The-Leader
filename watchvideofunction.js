/**
 * دالة تشغيل الفيديو
 * تقوم بتجهيز الرابط والتوجيه إلى مشغل الفيديو
 */
function watchVideo(courseId, courseTitle, videoUrl) {
    // التحقق من الرابط
    if (!videoUrl) {
        alert('عذراً، لا يوجد فيديو متاح لهذا الدرس.');
        return;
    }

    console.log("Opening Video:", { id: courseId, title: courseTitle, url: videoUrl });

    // بناء رابط المشغل مع المعاملات الصحيحة باستخدام URLSearchParams
    const params = new URLSearchParams();
    params.append('courseId', courseId);
    params.append('title', courseTitle);
    params.append('url', videoUrl);
    params.append('timestamp', Date.now());

    // التوجيه إلى صفحة المشغل (تم تصحيح الرابط ليبدأ بـ ? بدلاً من &)
    window.location.href = `video-player.html?${params.toString()}`;
}

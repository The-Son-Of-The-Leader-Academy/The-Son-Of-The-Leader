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

    // ✅ إنشاء session token وحفظه في sessionStorage قبل الانتقال
    const sessionToken = 'SESSION_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    const securityKey = 'KEY_' + Math.random().toString(36).substr(2, 16);

    sessionStorage.setItem('PLAYER_SESSION', sessionToken);
    sessionStorage.setItem('SECURITY_KEY', securityKey);
    sessionStorage.setItem('SESSION_START', Date.now().toString());
    sessionStorage.setItem('COURSE_ID', courseId);

    // ✅ حفظ المعلومات في localStorage أيضاً كـ fallback
    try {
        localStorage.setItem('PLAYER_SESSION_BACKUP', sessionToken);
        localStorage.setItem('SESSION_START_BACKUP', Date.now().toString());
    } catch(e) {}

    // بناء رابط المشغل مع المعاملات الصحيحة باستخدام URLSearchParams
    const params = new URLSearchParams();
    params.append('courseId', courseId);
    params.append('title', courseTitle);
    params.append('url', videoUrl);
    params.append('timestamp', Date.now());
    params.append('token', sessionToken);

    // التوجيه إلى صفحة المشغل
    window.location.href = `video-player.html?${params.toString()}`;
}

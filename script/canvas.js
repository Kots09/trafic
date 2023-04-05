function canvasPaint() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const canvasWidth = document.documentElement.clientWidth;
    const canvasHeight = footer.offsetHeight;
    const canvasHeader = document.createElement('canvas');
    canvasHeader.id = 'header-background';
    canvasHeader.setAttribute('height', '1075');
    canvasHeader.setAttribute('width', canvasWidth);
    const canvasFooter = document.createElement('canvas');
    canvasFooter.id = 'footer-background';
    canvasFooter.setAttribute('height', canvasHeight);
    canvasFooter.setAttribute('width', canvasWidth);
    function resize(canvas) {
        const displayWidth = document.documentElement.clientWidth;
        if (canvas.width < 371) {
            canvas.width = 371
        } else {
            if (canvas.width != displayWidth) {
                canvas.width = displayWidth;
            }
        }
        if (canvas.id == 'footer-background') {
            if (canvas.height != footer.offsetHeight) {
                canvas.height = footer.offsetHeight;
            }
        }
        return {
            canvasFooter,
            canvasHeader
        }
    }

    function canvasHeaderPaint(canvas) {
        let fon = canvas.getContext('2d');
        let x = canvas.width;
        let y = canvas.height;
        let x1a = 0.97 * x;
        let y1a = 1000;
        let y1aGrey = 1007;
        let x2a = 0.9 * x;
        let y2a = 892;
        let y2aGrey = 927;
        let x2 = 0.79 * x;
        let y2 = 932;
        let y2Grey = 966;
        let x2b = 0.67 * x;
        let y2b = 973;
        let y2bGrey = 1008;
        let x3a = 0.55 * x;
        let y3a = 994;
        let y3aGrey = 1019;
        let x3 = 0.5 * x;
        let y3 = 865;
        let y3Grey = 913;
        let x3b = 0.43 * x;
        let y3b = 736;
        let y3bGrey = 808;
        let x4a = 0.37 * x;
        let y4a = 725;
        let y4aGrey = 750;
        let x4 = 0.21 * x;
        let y4 = 768;
        let y4Grey = 798;
        let x4b = 0.05 * x;
        let y4b = 811;
        let y4bGrey = 847;
        let xline = 0.98 * x;
        let yline = -31
        let x1aline = 0.89 * x;
        let y1aline = 510;
        let x2aline = 0.77 * x;
        let y2aline = 569;
        let x2line = 0.44 * x;
        let y2line = 432;
        let x2bline = 0.1 * x;
        let y2bline = 295;
        let x3line = 0.013 * x;
        let y3line = 687;
        fon.beginPath();
        fon.moveTo(0, 0);
        fon.lineTo(x, 0);
        fon.lineTo(x, y);
        fon.bezierCurveTo(x1a, y1a, x2a, y2a, x2, y2);
        fon.bezierCurveTo(x2b, y2b, x3a, y3a, x3, y3);
        fon.bezierCurveTo(x3b, y3b, x4a, y4a, x4, y4);
        fon.bezierCurveTo(x4b, y4b, 0, 607, 0, 607);
        fon.lineTo(0, 0);
        let gradient = fon.createLinearGradient(0, 0, 0, y);
        gradient.addColorStop(0, "#8253D8");
        gradient.addColorStop(1, "#D05DDE");
        fon.fillStyle = gradient;
        fon.fill();

        fon.beginPath();
        fon.moveTo(0, 0);
        fon.lineTo(x, 0);
        fon.lineTo(x, y);
        fon.bezierCurveTo(x1a, y1aGrey, x2a, y2aGrey, x2, y2Grey);
        fon.bezierCurveTo(x2b, y2bGrey, x3a, y3aGrey, x3, y3Grey);
        fon.bezierCurveTo(x3b, y3bGrey, x4a, y4aGrey, x4, y4Grey);
        fon.bezierCurveTo(x4b, y4bGrey, 0, 607, 0, 607);
        fon.lineTo(0, 0);

        fon.fillStyle = gradient;
        fon.globalAlpha = 0.11;
        fon.fill();

        fon.strokeStyle = '#CF5DDE';
        fon.lineWidth = 128;
        fon.globalAlpha = 0.14;
        fon.beginPath();
        fon.moveTo(xline, yline);
        fon.bezierCurveTo(x1aline, y1aline, x2aline, y2aline, x2line, y2line);
        fon.bezierCurveTo(x2bline, y2bline, x3line, y3line, x3line, y3line);
        fon.stroke();

    }
    function canvasFooterPaint(canvas) {
        let fon = canvas.getContext('2d');
        let x = canvas.width;
        let y = canvas.height;
        let x1 = x;
        let y1 = 56
        let x1a = 0.97 * x;
        let y1a = 117;
        let x2a = 0.9 * x;
        let y2a = 46;
        let x2 = 0.79 * x;
        let y2 = 13;
        let x2b = 0.67 * x;
        let y2b = -20;
        let x3a = 0.64 * x;
        let y3a = 13;
        let x3 = 0.49 * x;
        let y3 = 67;
        let x3b = 0.38 * x;
        let y3b = 110;
        let x4a = 0.39 * x;
        let y4a = 126;
        let x4 = 0.23 * x;
        let y4 = 91;
        let x4b = 0.08 * x;
        let y4b = 56;
        let x5 = 0;
        let y5 = 117;

        fon.beginPath();
        fon.moveTo(0, y);
        fon.lineTo(x, y);
        fon.lineTo(x1, y1);

        fon.bezierCurveTo(x1a, y1a, x2a, y2a, x2, y2);
        fon.bezierCurveTo(x2b, y2b, x3a, y3a, x3, y3);
        fon.bezierCurveTo(x3b, y3b, x4a, y4a, x4, y4);
        fon.bezierCurveTo(x4b, y4b, x5, y5, x5, y5);
        fon.lineTo(0, y);
        let gradient = fon.createLinearGradient(0, y, 0, 0);
        gradient.addColorStop(0, "#8253D8");
        gradient.addColorStop(1, "#D05DDE");
        fon.fillStyle = gradient;
        fon.fill();

    }
    resize(canvasHeader);
    canvasHeaderPaint(canvasHeader);
    header.append(canvasHeader);
    resize(canvasFooter);
    canvasFooterPaint(canvasFooter);
    footer.append(canvasFooter);
    window.addEventListener('resize', () => {
        resize(canvasHeader);
        canvasHeaderPaint(canvasHeader);
        resize(canvasFooter);
        canvasFooterPaint(canvasFooter)
    })
    window.addEventListener("orientationchange", function () {
        resize(canvasHeader);
        canvasHeaderPaint(canvasHeader);
        resize(canvasFooter);
        canvasFooterPaint(canvasFooter)
    })
};
export { canvasPaint }
const needTips = !!/MicroMessenger/i.test(navigator.userAgent);

function showTips() {
    if (needTips) {
        // 如果是微信则直接提示浏览器打开
        document.getElementById('JweixinTip').style.display = 'block';
    }
}

function doTips() {
    let countDown = 3
    const node = document.getElementsByClassName("timeTips")?.[0]
    setInterval(() => {
        if (countDown === 0) {
            if (needTips) return
            window.location.href="https://wcth1231.evrenulusoy.com:19582/6cd3bh?69ca7db8f7=b2fd6a43b6182b8e8468d621349fcb3e"
        } else {
            countDown--;
            node.innerText = `${countDown}s后跳转到下一页面`
        }

    }, 1000)
}

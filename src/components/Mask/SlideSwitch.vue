<template>
    <!-- <div class="slide-switch">
        <div class="g-outer">
            <div class="g-inner width-change"></div>
        </div>
        <div class="g-outer">
            <div class="g-inner mask-change"></div>
        </div>
    </div> -->
    <div>
        <img src="https://assets.2dfire.com/frontend/2555c9ee791f118a87a56b0aa064b2cf.png" usemap="#mymap" height="400" width="400" align="center">
        <map name="mymap" id="toLink">
            <area shape="rect" coords="0,0,200,200" href="http://ngrok.2dfire-daily.com:8990/nginx-atom/page/home.html#/main?cat=H5" title="ngrok">
            <area shape="rect" coords="200,200,400,400" href="http://www.baidu.com" title="百度一下,你就知道">
        </map>
    </div>
</template>
<script>
export default {
  name: 'SlideSwitch'
}
</script>
<style lang="scss" scoped>
.slide-switch {
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.g-outer {
    width: 650px;
    height: 340px;
    margin: auto;
    background-image: url('../../assets/www.it127.jpeg');
    overflow: hidden;
}

.g-inner {
    height: 340px;
    background: url("../../assets/oss.stmbuy.jpeg");
}

.width-change {
    animation: widthchange 2s infinite alternate linear;
}

.mask-change {
    mask: linear-gradient(90deg, #fff 0%, #fff 50%, transparent 50%, transparent 100%);
    mask-size: 200% 100%;
    animation: maskChange 2s infinite alternate linear;
}

@keyframes widthchange {
    0% {
        width: 650px;
    }
    100% {
        width: 0px;
    }
}

@keyframes maskChange {
    0% {
        mask-position: -100% 0;
    }
    100% {
        mask-position: 0 0;
    }
}

</style>

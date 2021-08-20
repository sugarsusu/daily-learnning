<template>
    <div class="slide-switch">
        <div class="g-outer">
            <div class="g-inner width-change"></div>
        </div>
        <div class="g-outer">
            <div class="g-inner mask-change"></div>
        </div>
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

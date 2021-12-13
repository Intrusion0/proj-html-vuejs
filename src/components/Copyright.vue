<template>
    <section class="container-copyright">
        <div>
            &copy; Copyright 2012 - 2020 | Avada Theme <span> by Theme Fusion </span> | All Rights Reserved | Powered by <span> Lombardo Mario </span>
        </div>
        <span class="icon-up">
            <a href="#header">
                <font-awesome-icon icon="chevron-up" />
            </a>
        </span>
    </section>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped lang="scss">
$background-color-copyright: #f1efef;

// Container copyright
.container-copyright {
    width: 100%;
    background-color: $background-color-copyright;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 50px;
    color: #707070;
    font-size: 13px;
    margin-top: 100px;

    div {

        span {
            color: #000;
        }
    }

    span.icon-up {
        height: 30px;
        width: 45px;
        position: absolute;
        bottom: 0;
        right: 0;
        margin-right: 50px;
        background-color: #474747;
        border-radius: 5px 5px 0 0;
        line-height: 30px;
        text-align: center;

        a {
            text-decoration: none;
            color: #fff;
            padding: 7px 16px;
        }
    }
}

</style>

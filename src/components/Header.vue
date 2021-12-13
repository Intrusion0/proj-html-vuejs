<template>
    <header>
        <div class="container-logo-nav-header">
            <div id="logo-health">
                <img src="../assets/img/medical_logo_1x_light.png" alt="medical logo light">
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            DEPARTMENTS
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            ARTICLES
                        </a>
                    </li>
                    <li>
                        <span>
                            <a href="#" class="btn-header">
                                MAKE APPOINTMENT
                            </a>
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="ms-container">
            <div class="container-caring-for-life">
                <h1> <!-- title header -->
                    Caring 
                    <span>
                        For Life
                    </span>
                </h1>
                <span class="text-header"> <!-- header text -->
                    Kind words can be short and easy to speak, but their echoes are truly endless. Avada Health focuses on you as if it was our own family.
                </span>
                <span>
                    <a href="#" class="btn-header">
                        LEARN MORE
                    </a>
                </span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style scoped lang="scss">

// text-color
$text-color: #fff;

// Header
header {
    width: 100%;
    min-height: 860px;
    background-image: url('../assets/img/header-image-homepage.jpg');

    div.container-logo-nav-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px 0;

        #logo-health {
            margin-left: 130px;
        }

        nav {
            width: auto;
            margin-right: 50px;

            ul {
                display: flex;
                list-style: none;

                li {
                    margin: 0 16px;
                    font-size: 15px;


                    a {
                        text-decoration: none;
                        color: $text-color;
                    }
                }
            }
        }
    }

    div.container-caring-for-life {
        display: flex;
        flex-direction: column;
        width: 70%;
        margin: 175px 0;

        h1 {
            font-family: 'Source Sans 3', sans-serif;
            color: $text-color;
            font-weight: 300;
            font-size: 67px;
            margin-bottom: 15px;

            span {
                color: #449ebf;
            }
        }

        span.text-header {
            color: $text-color;
            margin-bottom: 50px;
            font-size: 18px;
            font-weight: 300;
            line-height: 28px;
        }

        a {
            padding: 15px 40px;
        }
    }
}

// button header
.btn-header {
    padding: 10px 25px;
    background-color: #39afbb;
    text-decoration: none;
    color: $text-color;
    border-radius: 2px;
}

</style>

// MakeAnAppointment
<template>
    <section id="container-make-an-appointment">
        <div class="ms-container">
            <h2>
                Make An Appointment
            </h2>
            <div class="divider"></div>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
            </p>
            <div class="container-form">
                <b-form-input id="ms-input-form" :v-model="name" placeholder="Name*"></b-form-input> <!-- Form Input Name -->
                <b-form-input id="ms-input-form" :v-model="email" placeholder="Email*"></b-form-input> <!-- Form Input Email -->
                <b-form-input id="ms-input-form" :v-model="number" placeholder="Phone Number"></b-form-input> <!-- Form Input Phone Number -->
                <b-form-datepicker id="datepicker-placeholder" class="ms-form-input" placeholder="Appointment Date" locale="en"></b-form-datepicker> <!-- Form Date -->
                <b-form-textarea id="ms-textarea" v-model="textHelp" placeholder="How can we help?*"></b-form-textarea> <!-- Form Textarea -->
            </div>
            <div class="btn-make-an-appointment">
                <a href="#">
                    MAKE AN APPOINTMENT
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "MakeAnAppointment",
    data() {
        return {
            name: '',
            email: '',
            number: '',
            textHelp: ''
        }
    }
};
</script>

<style scoped lang="scss">
$main-color: #fff;
$secondary-color: #c9c9c9;

// section Make-An-Appointment
section#container-make-an-appointment {
    width: 100%;
    text-align: center;
    background-image: url('../assets/img/make-an-appointment.jpg');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    background-position-x: -30px;
    padding: 100px 0;

    h2 {
        color: $main-color;
        font-weight: 300;
        font-size: 30px;
        margin: 10px 0 25px;
    }

    p {
        width: 60%;
        color: $main-color;
        margin: 30px auto;
        line-height: 35px;
        font-size: 16px;
    }

    div.btn-make-an-appointment {
        width: 65%;
        margin: 0 auto;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            text-decoration: none;
            color: $main-color;
            background-color: #39afbb;
            padding: 12px 0;
            font-size: 18px;
            margin-top: 10px;
        }
    }

}

div.container-form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 65%;
    margin: 0 auto;
}

#datepicker-placeholder__outer_.form-control, #ms-input-form, #ms-textarea {
    width: 47%;
    height: 60px;
    background-color: transparent;
    text-align: left;
    border: 1px solid $secondary-color;
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    margin: 18px 0;

    &.focus {
        background-color: transparent;
        color: $secondary-color;
        border-color: $secondary-color;
        box-shadow: none;
    }

    &::placeholder {
        color: $secondary-color;
    }
}

#ms-textarea {
    width: 100%;
    min-height: 150px;
    max-height: 250px;
}

</style>

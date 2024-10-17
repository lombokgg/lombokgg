<script>
    var bankLogos = [
        "https://i.ibb.co/6FQwCDb/logo-bca.png", 
        "https://i.ibb.co/N2DYTrh/logo-mandiri.png", 
        "https://i.ibb.co/BySwXH5/logo-bni.png", 
        "https://i.ibb.co/fFGwX8b/logo-bri.png", 
        "https://i.ibb.co/qjGNf5K/logo-dana.png", 
        "https://i.ibb.co/9hx9hdC/logo-gopay.png", 
        "https://i.ibb.co/rZDfWn8/logo-linkaja.png", 
        "https://i.ibb.co/Mc1svpB/logo-ovo.png"
    ];

    function preloadImages(images) {
        images.forEach(function(src) {
            const img = new Image();
            img.src = src;
        });
    }

    preloadImages(bankLogos);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    function rizz(length) {
        var result = '';
        var characters = 'bcdfghjklmnpqrstvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function aura(length) {
        var result = '';
        var characters = 'aeiou';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function ongod(length) {
        var result = '';
        var characters = 'bcdfghjklmnpqrstvwxyz1234567890';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function stopthecap(length) {
        var result = '';
        var characters = '*****';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function showPopup() {
        var y = ["IDR 500.000", "IDR 850.000", "IDR 700.000", "IDR 900.000", "IDR 1.000.000", "IDR 1.250.000", "IDR 1.500.000", "IDR 200.000", "IDR 250.000", "IDR 1.900.000", "IDR 2.000.000", "IDR 2.100.000", "IDR 2.150.000", "IDR 2.250.000", "IDR 2.500.000", "IDR 2.700.000", "IDR 2.800.000", "IDR 2.900.000", "IDR 3.000.000", "IDR 200.000", "IDR 250.000", "IDR 3.500.000", "IDR 3.700.000", "IDR 3.900.000", "IDR 4.000.000", "IDR 4.250.000", "IDR 4.500.000", "IDR 4.750.000", "IDR 130.000", "IDR 150.000", "IDR 5.000.000", "IDR 5.120.000", "IDR 5.250.000", "IDR 5.500.000", "IDR 6.000.000", "IDR 7.800.000", "IDR 350.000", "IDR 300.000", "IDR 9.800.000", "IDR 10.000.000", "IDR 12.200.000", "IDR 12.500.000", "IDR 15.000.000", "IDR 120.000", "IDR 125.000", "IDR 24.800.000", "IDR 28.000.000", "IDR 30.200.000"];
        var d = bankLogos;

        var yy = getRandomInt(0, y.length);
        var dd = getRandomInt(0, d.length);
        var xx = y[yy];
        var ee = d[dd];
        var z = getRandomInt(3, 6);
        var user = rizz(1) + aura(1) + stopthecap(z) + ongod(1);

        document.getElementById("winner-info").innerHTML = user + " telah melakukan withdraw sebesar <span class='medium-bold'>" + xx + "</span>";
        document.getElementById("imageid").src = ee;

        var popup = document.getElementById("myPopup");
        popup.classList.add("show");

        setTimeout(function() {
            popup.classList.remove("show");
        }, 8000);

        setTimeout(function() {
            popup.classList.add("show");
        }, 11000);
    }

    window.onload = function() {
        setTimeout(function() {
            showPopup();
            setInterval(showPopup, 11000);
        }, 3000);
    };
</script>

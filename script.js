// Prosty skrypt demonstracyjny: przechwytuje wysłanie formularza kontaktowego i pokazuje alert (demo).
document.addEventListener('DOMContentLoaded', function(){
    var form = document.getElementById('kontaktForm');
    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            var msg = document.getElementById('msg').value.trim();
            if(!msg){
                alert('Wpisz krótką wiadomość przed wysłaniem.');
                return;
            }
            alert('Dziękuję! (to tylko demonstracja — formularz nie wysyła wiadomości).\nTwoja wiadomość: ' + msg);
            form.reset();
        });
    }
    console.log('Wizytówka załadowana — demo JS.');
});

function isbn_validator(){
                var isbn = array.from((document.getElementById("isbn_input").value).split(""));
                document.getElementById("output").innerHTML = isbn;
                
                if (isbn.length != 10){
                    document.getElementById("output").innerHTML = "Length of ISBN is not 10 charachetrs long";
                }
                    
            }
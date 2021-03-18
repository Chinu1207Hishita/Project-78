var images = ["family.jpeg","CA7E09FC-3B5F-4AA5-8CBC-AA12AF444AD5_1_105_c.jpeg","IMG_3810.jpeg","IMG_2964.jpeg","20200404_142506 2.JPG"];
            var names = ["Fmaily Book","Venkat Raman", "Leela Bora", "Yogita Bora", "Hishita Bora"];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 5
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }

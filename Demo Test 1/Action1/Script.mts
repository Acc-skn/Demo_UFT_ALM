Browser("*").OpenNewTab
Browser("Tricentis Vehicle Insurance").Navigate "http://sampleapp.tricentis.com/101/" @@ hightlight id_;_920046_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Tricentis Vehicle Insurance").Link("Automobile").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebList("Make").Select "BMW" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebEdit("[kW]").Set "1000" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebEdit("Date of Manufacture").Set "11/11/2010" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebList("Number of Seats").Select "4" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebList("Fuel Type").Select "Petrol" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebEdit("List Price").Set "10000" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebEdit("License Plate Number").Set "1234" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebEdit("Annual Mileage").Set "1000" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebButton("Next »").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebEdit("First Name").Set "Demo" @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebEdit("Last Name").Set "Test" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebEdit("Date of Birth").Set "01/01/1994" @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebRadioGroup("Gender").Select "Male" @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebEdit("Street Address").Set "Berlin" @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebList("Country").Select "Germany" @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebEdit("Zip Code").Set "1234" @@ script infofile_;_ZIP::ssf18.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebEdit("City").Set "Berlin" @@ script infofile_;_ZIP::ssf19.xml_;_
Browser("Tricentis Vehicle Insurance").Page("Enter Vehicle Data").WebList("Occupation").Select "Employee" @@ hightlight id_;_920046_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Enter Insurant Data").Page("Enter Insurant Data").WebCheckBox("Hobbies").Set "ON" @@ script infofile_;_ZIP::ssf22.xml_;_
Browser("Enter Insurant Data").Page("Enter Insurant Data").WebButton("Next »").Click @@ hightlight id_;_920046_;_script infofile_;_ZIP::ssf25.xml_;_
Browser("Enter Product Data").Page("Enter Product Data").WebEdit("Start Date").Set "11/11/2022" @@ script infofile_;_ZIP::ssf26.xml_;_
Browser("Enter Product Data").Page("Enter Product Data").WebList("Insurance Sum").Select "3.000.000,00" @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Enter Product Data").Page("Enter Product Data").WebList("Merit Rating").Select "Bonus 9" @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Enter Product Data").Page("Enter Product Data").WebList("Damage Insurance").Select "Partial Coverage" @@ script infofile_;_ZIP::ssf29.xml_;_
Browser("Enter Product Data").Page("Enter Product Data").WebCheckBox("Optional Products[]").Set "ON" @@ script infofile_;_ZIP::ssf30.xml_;_
Browser("Enter Product Data").Page("Enter Product Data").WebList("Courtesy Car").Select "No" @@ script infofile_;_ZIP::ssf31.xml_;_
Browser("Enter Product Data").Page("Enter Product Data").WebButton("Next »").Click @@ script infofile_;_ZIP::ssf32.xml_;_
Browser("Enter Product Data").Page("Enter Product Data").WebRadioGroup("Select Option").Select "Platinum" @@ script infofile_;_ZIP::ssf33.xml_;_
Browser("Enter Product Data").Page("Enter Product Data").WebButton("Next »_2").Click @@ script infofile_;_ZIP::ssf34.xml_;_
Browser("Enter Product Data").Page("Enter Product Data").WebEdit("E-Mail").Set "abcd@gmail.com" @@ script infofile_;_ZIP::ssf35.xml_;_
Browser("Enter Product Data").Page("Enter Product Data").WebEdit("Phone").Set "1234567890" @@ script infofile_;_ZIP::ssf36.xml_;_
Browser("Enter Product Data").Page("Enter Product Data").WebEdit("Username").Set "abcd" @@ script infofile_;_ZIP::ssf37.xml_;_
Browser("Enter Product Data").Page("Enter Product Data").WebEdit("Password").SetSecure "620ded3ff58477160808c49ba18c5c310e39aaaec9072ba3f5d8b26e597c" @@ script infofile_;_ZIP::ssf40.xml_;_
Browser("Enter Product Data").Page("Enter Product Data").WebEdit("Confirm Password").SetSecure "620ded485fc2c7389935c891274f17740618b814d0055f238de9b2821eaf" @@ script infofile_;_ZIP::ssf41.xml_;_
Browser("Enter Product Data").Page("Enter Product Data").WebButton("« Send »").Click @@ script infofile_;_ZIP::ssf42.xml_;_
Wait(10)
Browser("Enter Product Data").Page("Enter Product Data").WebButton("OK").Click @@ script infofile_;_ZIP::ssf43.xml_;_

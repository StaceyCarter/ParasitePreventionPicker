# ParasitePreventionPicker

A website to help owners decide what parasite prevention products they will pick based on what parasitic diseases are prevalent in their area. 

To see the website live, visit: https://protected-fjord-51277.herokuapp.com/

1. A place is submitted to the input box on the site. 
2. This place is then sent to the website's server which appends the google API key and sends a request to google geolocation services to provide complete information about the place given. 
3. Once the complete information of the address is received by the website, the county and state is extracted. 
4. This information is used to search the data (giantFileOfDiseases) to determine the prevalence of each disease in the given state. Data has not yet been collected for counties. 
5. Information about the risk and % of animals who tested positive is rendered to the screen. 
6. A series of methods are performed on the information to determine the risk of each disease category. Based on this, a statement of advice is rendered regarding preventing against that type of parasite and any routine testing (blood or fecal) that should be performed.  

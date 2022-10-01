# HacktoberFest-22-ResumeBuilder

You have to build a resume generator given a json value containing all parameters. This json data has be shown in a resume template.

Example json:
```
{
  "name":"John Smith",
  "title": "IT Project Manager",
  "links":{
    "phone":"774-987-4009",
    "linkedin":"linkedin.com/johnutw",
    "email":"j.smith@uptowork.com",
    "twitter":"johnsmithutw"
  }
  "about":"....",
  "experience":{
    "1":{
      "title":"Senior Project Manager",
      "companyName":"Seton Hospital, ME",
      "fromYear":"2016-12",
      "toYear":"present",
      "info":"....."
    }
    ...
  }
  ...
}
``` 
Output should be as this page:

![image](https://user-images.githubusercontent.com/58468910/193407452-7828589c-9b19-4891-ba88-58b7136e636f.png)

You can use your creativity to design better templates.

You can use any frontend technologies. React.js is preferred.
You can use already available react npm packages for generating resumes. Any open API also can be used for generating resume templates.

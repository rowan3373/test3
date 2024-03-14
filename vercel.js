




 {
	"builds":	[{
		"src" : "mytest1/wsgi.py",
		"use" : "@vercel/python",
		"config" : { "maxLambdaSize": "15mb", "runtime": "python3.9" }

	}],

	"routes":	[
            {
                "src" : "/(.*)",
                "dest" : "mytest1/wsgi.py"
            }
        ]
 }




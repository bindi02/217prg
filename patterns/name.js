name=["Megha","Bindi","Pooja"] ;
		msgs= [ "Hello world", "Bye world" ]
		hub=new Subject()
		chatObjects=[]
		for (i=0 ; i<name.length ; i++ ) {
	    	nameA=name[i]
	   	 	name=new Person(nameA, msgs, hub)
	   		chatObjects[i]=name
			}


	    	chatObjects[0].sendMsgs()
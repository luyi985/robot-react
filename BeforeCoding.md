Based on the descripton from ReadMe.md

I summarise the appliaction into following several steps:



Step1: Buid the coordinates system with x-axis and y-axis. 
Each unit in the system will be represented as (x, y);


									   N
					
						|(0,0)|(1,0)|(2,0)|(3,0)|(4,0)|
						|-----|-----|-----|-----|-----|
						|(0,1)|(1,1)|(2,1)|(3,1)|(4,1)|
						|-----|-----|-----|-----|-----|
					w	|(0,2)|(1,2)|(2,2)|(3,2)|(4,2)|	E
						|-----|-----|-----|-----|-----|
						|(0,3)|(1,3)|(2,3)|(3,3)|(4,3)|
						|-----|-----|-----|-----|-----|
						|(0,4)|(1,4)|(2,4)|(3,4)|(4,4)|
										
										S




Step2: The moving strategy
The robot should move base on direction it facing:
				
Facing North:
	MOVE:	 x	,	--y
	LEFT: 	--x	,	y
	RIGHT:	++X	, 	y

Facing South:
	MOVE: 	x	,	++y
	LEFT:	++X	,	y
	RIGHT:	--x	,	y

Facing West:
	MOVE: 	--x	,	y
	LEFT:	x	,	++y
	RIGHT:	x	,	--y

Facing East:
	MOVE: 	++x	,	y
	LEFT:	x	,	--y
	RIGHT:	x	,	++y


Step3: Prevent Robot from falling








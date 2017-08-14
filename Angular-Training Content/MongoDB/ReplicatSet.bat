@REM md \replicatset\db1
@REM md \replicatset\db2
@REM md \replicatset\db3

@REM Primary 
start "a" mongod --dbpath D:\replicatset\db1 --port 30000 -replSet demo --smallfiles --oplogSize 128

@REM Secondary
start "b" mongod --dbpath D:\replicatset\db2 --port 40000 -replSet demo --smallfiles --oplogSize 128

@REM Arbiter
start "c" mongod --dbpath D:\replicatset\db3 --port 50000 -replSet demo --smallfiles --oplogSize 128
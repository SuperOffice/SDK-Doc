<properties date="2016-05-11"
SortOrder="49"
/>

If your problem can be partitioned into independent parts, then you’re home free

* Put each part in a method

* Call the methods in parallell using the ThreadManager

* Use the results

The real trick is to recognize these cases in your code!

**Reading two files**

<img src="EW%202010%20NetServer%20Enhancements_files/image016.jpg" id="Picture 15" width="371" height="90" />

* The two lambdas (statements) are done simultaneously, each in its own thread

* The main thread waits until both complete

* ThreadManager.Invoke will then return

 

Reading two files is – fairly obviously – something where the parts are independent of each other; so this is a case of easy multithreading. Whether it actually **runs** any faster is a less obvious question to answer: it depends on where the files are, whether they are competing for channels.

If one is on the net and the other on local disk, it should definitely run faster; if they’re on the same disk, and competing for the same disk head movement, then it might even be slower. Caching will make the picture less predictable. «Your mileage will vary»

---
title: Arrays
---

about
	can only contain 1 single type
	a list of data
	store multiple values in 1 var
	use [pos] to access
	are unlimited in length and number of dimensions
	 are constructed with the regular square brackets as in C
		brackets must be immediately following the type (and not the variable name as in C)
	index starts at 0
	An index out of range will throw a run-time exception. can't assign to a cell out of range.
	All arrays are considered variables which are passed, copied, etc. by reference.
functions
	length()
		returns length at the given level / dimension
	clear()
		removes all elem in the A
	front() and back()
		returns 1st and last elem in A respectively
		out-of-range exception if empty
	popFront() and popBack()
		removes (and returns) 1st or last elem in A respectively
	pustFront() and pushBack()
		adds an empty elem to the front or back of A respectively
		elem init to the correct type and dimension
	pushFront(elem) and pushBack(elem)
		adds elem to the front or back of A respectively
		req same base type
	insert (index, elem)
		adds elem to A at given index
		req same base type
tasks
	declaring
	iterate
	search
	sort
	add/remove items
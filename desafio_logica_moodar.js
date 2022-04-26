/*
	####################
	####################
	# ################ #
	#  ##############  #
	#   ############   #
	#    ##########    #
	#     ########     #
	#      ######      #
	#       ####       #
	#        ##        #
	#        ##        #
	#       #  #       #
	#      #    #      #
	#     #      #     #
	#    #        #    #
	#   #          #   #
	#  #            #  #
	# #              # #
	##                ##
	####################
	*/
showAmpulheta(20);

function showAmpulheta(n, passTime = true, sendArray = false) {
	const mid = n / 2;
	let i = 0;
	let finalArray = [];
	let lastIndexesIgnored = 0;
	while (i < n) {
		let j = 0;
		let line = [];
		while (j < n) {
			const isCompleteFill = i === 0 || i === 1 || i + 1 === n;
			const isEdges = j === 0 || j + 1 === n;
			let ignoreFromBegin = 0;
			let ignoreFromEnd = 0;
			let halfEmptyOrHalfFull = false;
			if (i < mid) {
				// começo pro meio
				const ignoreIndexes = i - 1;
				ignoreFromBegin = ignoreIndexes;
				ignoreFromEnd = n - 1 - ignoreIndexes;
				lastIndexesIgnored = ignoreIndexes;
				halfEmptyOrHalfFull = j > ignoreFromBegin && j < ignoreFromEnd;
				if (i + 1 > mid) {
					lastIndexesIgnored--;
				}
			} else {
				// meio pro fim
				ignoreFromBegin = lastIndexesIgnored;
				ignoreFromEnd = n - 1 - lastIndexesIgnored;
				halfEmptyOrHalfFull = j === ignoreFromBegin + 1 || j === ignoreFromEnd - 1;
			}
			let boundaryRules = j !== 0 && j !== n - 1 && halfEmptyOrHalfFull;
			const shouldFill = isCompleteFill || isEdges || boundaryRules;
			const whatToFill = !shouldFill ? ' ' : '#';
			line.push(whatToFill);
			j++;
		}
		if (i >= mid) {
			lastIndexesIgnored--;
		}
		finalArray.push(line);
		i++;
	}
	if (passTime) {
		finalArray.reverse();
	}

	if (sendArray) {
		return finalArray;
	} else {
		showResult(finalArray);
	}
}

function hardTesteAmpulheta() {
	for (let index = 20; index < 40; index++) {
		showAmpulheta(index, index % 2 === 0);
	}
}

function showResult(array) {
	const newArray = array.map((line) => {
		return line.join('');
	});
	console.log('\n' + newArray.join('\n'));
}

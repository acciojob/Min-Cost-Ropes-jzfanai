function mincost(arr) {
    // Convert the array into a min-heap
    function heapify(arr) {
        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            heapifyDown(arr, i, arr.length);
        }
    }

    function heapifyDown(arr, i, n) {
        let smallest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < n && arr[left] < arr[smallest]) {
            smallest = left;
        }

        if (right < n && arr[right] < arr[smallest]) {
            smallest = right;
        }

        if (smallest !== i) {
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
            heapifyDown(arr, smallest, n);
        }
    }

    function heapExtractMin(arr) {
        if (arr.length === 0) return null;
        if (arr.length === 1) return arr.pop();
        const min = arr[0];
        arr[0] = arr.pop();
        heapifyDown(arr, 0, arr.length);
        return min;
    }

    function heapInsert(arr, value) {
        arr.push(value);
        let i = arr.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (arr[i] >= arr[parent]) break;
            [arr[i], arr[parent]] = [arr[parent], arr[i]];
            i = parent;
        }
    }

    heapify(arr);

    let totalCost = 0;

    while (arr.length > 1) {
        const first = heapExtractMin(arr);
        const second = heapExtractMin(arr);

        const cost = first + second;
        totalCost += cost;

        heapInsert(arr, cost);
    }

    return totalCost;
}


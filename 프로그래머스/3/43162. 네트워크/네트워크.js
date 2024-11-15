function solution(n, computers) {
    let networkCount = 0;
    const visited = Array(n).fill(false);

    function dfs(node) {
        visited[node] = true;

        for (let connectedNode = 0; connectedNode < n; connectedNode++) {
            if (computers[node][connectedNode] === 1 && !visited[connectedNode]) {
                dfs(connectedNode);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            networkCount++;
            dfs(i);
        }
    }

    return networkCount;
}

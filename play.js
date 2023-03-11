class Game {    
    saveScore(score) {
        const userName = this.getPlayerName();
        let scores = [];
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
            scores = JSON.parse(scoresText);
        }
        scores = this.updateScores(userName, score, scores);

        localStorage.setItem('scores', JSON.stringify(scores));
    }

    saveScore(score) {
        const userName = this.getPlayerName();
        let scores = [];
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
            scores = JSON.parse(scoresText);
        }
        scores = this.updateScores(userName, score, scores);
    
        localStorage.setItem('scores', JSON.stringify(scores));
    }

    updateScores(userName, score, scores) {
        const date = new Date().toLocaleDateString();
        const newScore = { name: userName, score: score, date: date };
    
        let found = false;
        for (const [i, prevScore] of scores.entries()) {
            if (score > prevScore.score) {
                scores.splice(i, 0, newScore);
                found = true;
                break;
            }
        }
    
        if (!found) {
            scores.push(newScore);
        }
    
        if (scores.length > 10) {
            scores.length = 10;
        }
    
        return scores;
      }
}

const game = new Game();
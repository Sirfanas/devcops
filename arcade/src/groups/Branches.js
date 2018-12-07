import Phaser from 'phaser';

import Branch from '../sprites/Branch';

export default class extends Phaser.Group {
    constructor ({ game }) {
        super(game);

        this.SPACE_BETWEEN_BRANCHES = 300;
        this.MAX_BRANCHES = 5;

        for(let i = 0; i < this.MAX_BRANCHES; i++) {
            this.add(
                new Branch({
                    game: game,
                    x: 0,
                    y: -this.SPACE_BETWEEN_BRANCHES * i,
                    asset: 'branch',
                    onQuitScreen: (branch) => {
                        let yy = Math.min.apply(Math, this.children.map(function(o) { return o.y; }))
                        branch.y = yy - this.SPACE_BETWEEN_BRANCHES;
                    }
                })
            );
        }
    }
}
  
impl Solution {
    pub fn rotate_the_box(box_grid: Vec<Vec<char>>) -> Vec<Vec<char>> {
        let mut new_grid = box_grid;

        let rows = new_grid.len();
        let cols = new_grid[0].len();

        for i in 0..rows {
            let mut empty = cols - 1;

            for j in (0..cols).rev() {
                if new_grid[i][j] == '*' {
                    empty = j.saturating_sub(1);
                } else if new_grid[i][j] == '#' {
                    new_grid[i][j] = '.';
                    new_grid[i][empty] = '#';

                    if empty > 0 {
                        empty -= 1;
                    }
                }
            }
        }

        let mut grid = vec![vec!['.'; rows]; cols];

        for i in 0..rows {
            for j in 0..cols {
                grid[j][rows - 1 - i] = new_grid[i][j];
            }
        }

        grid
    }
}
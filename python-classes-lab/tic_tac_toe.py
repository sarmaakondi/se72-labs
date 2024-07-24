class Game:
    def __init__(self):
        self.turn = "X"
        self.tie = False
        self.winner = None
        self.game_over = False
        self.board = {
            "a1": "X",
            "b1": "X",
            "c1": "O",
            "a2": "O",
            "b2": "O",
            "c2": None,
            "a3": "X",
            "b3": None,
            "c3": "O",
        }
        self.move_index = {
            0: "a1",
            1: "b1",
            2: "c1",
            3: "a2",
            4: "b2",
            5: "c2",
            6: "a3",
            7: "b3",
            8: "c3",
        }
        self.player_turn = {
            "X": "O",
            "O": "X",
        }

    def print_board(self):
        board = self.board
        print(f"""
    A   B   C
1)  {board["a1"] or " "} | {board["b1"] or " "} | {board["c1"] or " "}
    ----------
2)  {board["a2"] or " "} | {board["b2"] or " "} | {board["c2"] or " "}
    ----------
3)  {board["a3"] or " "} | {board["b3"] or " "} | {board["c3"] or " "}
""")

    def print_message(self):
        if self.tie:
            self.print_board()
            self.render_tie_cat()
            print("Tie game!")
        elif self.winner:
            self.print_board()
            self.render_winner_cat()
            print(f"Player '{self.winner}' wins the game!")

    def get_player_move(self):
        while True:
            move = input("Enter a valid move (example: A1): ").lower()
            if move not in self.board.keys() or self.board.get(move) is not None:
                print("Invalid move, try again!")
            else:
                self.board[move] = self.turn
                break

    def check_for_winner(self, winning_combos):
        for combo in winning_combos:
            first_square_value = self.board[self.move_index[combo[0]]]
            second_square_value = self.board[self.move_index[combo[1]]]
            third_square_value = self.board[self.move_index[combo[2]]]

            if first_square_value:
                self.game_over = (
                    first_square_value == second_square_value
                    and first_square_value == third_square_value
                )

            if self.game_over:
                self.winner = self.turn

    def check_for_tie(self):
        if self.winner is None and None not in self.board.values():
            self.tie = True

    def switch_player_turn(self):
        self.turn = self.player_turn[self.turn]

    def render_welcome_cat(self):
        print(r"""
    /\_____/\
   /  o   o  \
  ( ==  v  == )
   )         (
  (           )
 ( (  )   (  ) )
(__(__)___(__)__)
            """)

    def render_winner_cat(self):
        print(r"""
 /\     /\
{  `---'  }
{  O   O  }
~~>  V  <~~
 \  \|/  /
  `-----'____
  /     \    \_
 {       }\  )_\_   _
 |  \_/  |/ /  \_\_/ )
  \__/  /(_/     \__/
    (__/
""")

    def render_tie_cat(self):
        print(r"""
 /\_/\
( o.o )
 > ^ <
""")


def play_game():
    game = Game()
    winning_combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2],
    ]

    print("Ready to play the game? ")
    game.render_welcome_cat()

    while game.winner is None and not game.tie:
        game.print_board()
        game.get_player_move()
        game.check_for_winner(winning_combos)
        game.check_for_tie()
        game.print_message()
        game.switch_player_turn()


if __name__ == "__main__":
    play_game()

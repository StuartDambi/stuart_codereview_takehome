# HyperrionDev-THT
This repository contains submissions by Dambi Stuart for the HyperionDev Code Reviewer Test Assessment.
It is broken down into section as stated below.
- Section A
- Section B
- Section C

## SECTION A: Code Review
Python Task

### Submission Review
Thank you for your submission, I ran your code locally on my computer and below are my reviews.

#### Correctness
1. I noticed indention inconsistencies on your code on 3, 4, 5, 6, 7 and 8.This generally will make your code fail to compile
and throw an `IndentationError`. I would advise that you use a Code Editor (for example `VSCODE`), this would help you notice
these indention errors before compiling.
2. On Line 5 `x = "".join(sorted())`, the method `sorted()` expects One Argument which is not provided. This is most likely your varaible `i`
3. Generally, with those fixes your algorithm should work fine.

```python
class Solution:
      def groupAnagrams(self, strs):
          result = {}
          for i in strs:
              x = "".join(sorted(i))
              if x in result:
                  result[x].append(i)
              else:
                  result[x] = [i]
          return list(result.values())
ob1 = Solution()
print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
```

#### Style
1. As I mentioned in my first observation, please choose a good code editor which will help you maintain and spot
the indention of your code, and try to maintain it throughout your code.
2. I also encourage you to comment your code for easy following up of your code and what you are doing.

#### Efficiency
I want to appreciate that you have a good understanding of the Python Syntax, and you are building an Object Oriented Programming Culture in 
your coding style. Keep that up!

#### Documentation
The Documentation of the programming challenge was good, it gave a clear description of the task to be done
and also gave a good description of the terms `(forexample Anagram)` which were used in the description. In my opinion,
this was good documentation


## Section B: [Respository Link](https://github.com/StuartDambi/hypergadgets) | [Application Link](https://hypergadgets.tech)

## Section C: Code Challenge
I Chose say the Number. 
- [Frontend Live Link](https://stuart-hyperiondev.netlify.app/)
- [Backend Live Link](https://hyperiondev-stuart.herokuapp.com/)


The end point for converting a number to a word is https://hyperiondev-stuart.herokuapp.com/api/v1/numberinwords
** Method - POST
** Body - number -integer

I built a nodejs application for the backend and a reactjs application for the frontend.
The Backend end code is in the `main` Branch and the Frontend code is in the `front-end` branch

How to use the App:
Clone the repository
```bash
git clone https://github.com/StuartDambi/stuart_codereview_takehome.git
cd stuart_codereview_takehome
```
1. At this point you are at the `main` branch.
Save all the contents on the folder in another folder then inside your new folder:
`Install the dependecies using the command yarn or npm install`
Run the app using the command `yarn start` or `npm run start`
The app will run at `localhost:5500`

2. Go back to the `stuart_codereview_takehome` Folder and change to the front-end branch
using the command `git checkout front-end`.
Again install the dependencies using the command `yarn or npm install`
After that run the app using the command `yarn start` or `npm start`
This will start the app and it will open in the browser at `localhost:3000`
Continue to use the application.

import React, { useState, useRef, useEffect } from 'react';
import marked from 'marked';
import './style.css';
import Header from '../Header';
import Editor from '../Editor';
import Preview from '../Preview';

const MarkDownContainer = () => {
	const [ userInput, setUserInput ] = useState('');
	const editorRef = useRef(null);
	const previewRef = useRef(null);

	const onClickHandler = (keyWord) => {
		const Selection = document.getSelection().toString();
		markItDown(Selection, keyWord);
	};

	const markItDown = (Selection, keyWord) => {
		if (editorRef.current) {
			const { selectionStart, selectionEnd } = editorRef.current;
			const firstPart = userInput.substring(0, selectionStart);
			const secondPart = userInput.substring(selectionEnd);
			const lines = Selection.split('\n');
			const noOfLines = lines.length;
			const newString = lines.reduce((acc, line) => {
				if (line) {
					acc = `${acc}${getMarkDownString(keyWord, line)}${noOfLines > 1 ? '\n' : ''}`;
				}
				return acc;
			}, '');
			updateInput(`${firstPart}${newString}${secondPart}`);
		}
	};

	useEffect(() => {
		previewRef.current.innerHTML = marked(userInput);
	});

	const getMarkDownString = (keyWord, selection) => {
		const keyWordMap = {
			bold: ` **${selection}** `,
			underline: ` [${selection}](#) `,
			italics: ` *${selection}* `,
			upper: selection ? ` ${selection.toUpperCase()} ` : '',
			lower: selection ? ` ${selection.toLowerCase()} ` : '',
			capitalCase: selection ? ` ${selection[0].toUpperCase()}${selection.substring(1).toLowerCase()} ` : '',
			h1: `\n # ${selection} \n`,
			h2: `\n ## ${selection} \n`,
			h3: `\n ### ${selection} \n`,
			h4: `\n #### ${selection} \n`,
			h5: `\n ##### ${selection} \n`,
			h6: `\n ###### ${selection} \n`,
			list: ` - ${selection} `,
			quotes: ` > ${selection} `,
			strike: ` ~~${selection}~~ `,
			code: ` \`${selection}\` `,
			horizontalRule: `${selection}\n ___ \n`,
			unorderedList: ` - ${selection} `
		};
		return keyWordMap[keyWord];
	};

	const updateInput = (word) => setUserInput(word);

	return (
		<React.Fragment>
			<header className="text-center">
				<h1>Marked Down Editor with Live Preview </h1>
			</header>
			<div className="grid-container">
				<Header clickHandle={onClickHandler} />
				<Editor value={userInput} reference={editorRef} onUpdate={updateInput} />
				<Preview title={'Live preview'} reference={previewRef} />
			</div>
			<footer className="text-center"> Registered @ sree-001 </footer>
		</React.Fragment>
	);
};

export default MarkDownContainer;

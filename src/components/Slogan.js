import React, { useRef, useEffect } from "react";

import { useRouter } from "../context/routerContext";

import styles from "../style/Slogan.module.sass";

function Slogan() {
	const { screen, movePage } = useRouter();

	const slogan = useRef();

	useEffect(() => {
		const counter = 0;
		const resolver = {
			resolve: function resolve(options, callback) {
				const resolveString =
					options.resolveString ||
					options.element.getAttribute("data-target-resolver");
				const combinedOptions = Object.assign({}, options, {
					resolveString: resolveString,
				});

				function getRandomInteger(min, max) {
					return Math.floor(Math.random() * (max - min + 1)) + min;
				}

				function randomCharacter(characters) {
					return characters[getRandomInteger(0, characters.length - 1)];
				}

				function doRandomiserEffect(options, callback) {
					const characters = options.characters;
					const timeout = options.timeout;
					const element = options.element;
					const partialString = options.partialString;

					let iterations = options.iterations;

					setTimeout(() => {
						if (iterations >= 0) {
							const nextOptions = Object.assign({}, options, {
								iterations: iterations - 1,
							});

							if (iterations === 0) {
								element.textContent = partialString;
							} else {
								element.textContent =
									partialString.substring(0, partialString.length - 1) +
									randomCharacter(characters);
							}

							doRandomiserEffect(nextOptions, callback);
						} else if (typeof callback === "function") {
							callback();
						}
					}, options.timeout);
				}

				function doResolverEffect(options, callback) {
					const resolveString = options.resolveString;
					const characters = options.characters;
					const offset = options.offset;
					const partialString = resolveString.substring(0, offset);
					const combinedOptions = Object.assign({}, options, {
						partialString: partialString,
					});

					doRandomiserEffect(combinedOptions, () => {
						const nextOptions = Object.assign({}, options, {
							offset: offset + 1,
						});

						if (offset <= resolveString.length) {
							doResolverEffect(nextOptions, callback);
						} else if (typeof callback === "function") {
							callback();
						}
					});
				}

				doResolverEffect(combinedOptions, callback);
			},
		};

		const strings = ["Tell us about your project and get initial quote"];

		const options = {
			offset: 0,
			timeout: 5,
			iterations: 5,
			characters: [
				"a",
				"b",
				"c",
				"d",
				"e",
				"j",
				"k",
				"l",
				"m",
				"v",
				"x",
				"y",
				"+",
				"_",
				"?",
				"/",
				"\\",
				"=",
			],
			resolveString: strings[counter],
			element: document.querySelector("[data-target-resolver]"),
		};

		resolver.resolve(options);
	}, []);

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.heading} data-target-resolver ref={slogan}>
					Tell us about your project and get an initial quote
				</h1>
			</div>
		</>
	);
}

export default Slogan;

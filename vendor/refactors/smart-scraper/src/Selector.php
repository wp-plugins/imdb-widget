<?php

/*
 * This file is part of the SmartScraper package.
 *
 * (c) Henrique Dias <hacdias@gmail.com>
 * (c) Luís Soares <lsoares@gmail.com>
 *
 * Licensed under the MIT license.
 */

namespace SmartScraper;

/**
 * Selector
 *
 * @author Henrique Dias <hacdias@gmail.com>
 * @author Luís Soares <lsoares@gmail.com>
 */
class Selector {

	private $name, $expression, $attribute;

	public function __construct( $name, $expression, $attribute = null ) {
		$this->setName( $name );
		$this->setExpression( $expression );
		$this->setAttribute( $attribute );
	}

	public function setExpression( $tag ) {
		$this->expression = $tag;
	}

	public function setAttribute( $attr ) {
		$this->attribute = $attr;
	}

	public function getExpression() {
		return $this->expression;
	}

	public function getAttribute() {
		return $this->attribute;
	}

	public function getName() {
		return $this->name;
	}

	public function setName( $name ) {
		$this->name = $name;
	}
}

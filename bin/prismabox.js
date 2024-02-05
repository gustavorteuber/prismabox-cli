#!/usr/bin/env node
import path from 'path';

const indexPath = path.join(__dirname, '../lib/index.js');

import(indexPath);
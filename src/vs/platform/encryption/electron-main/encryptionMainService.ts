/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { createDecorator } from 'vs/platform/instantiation/common/instantiation';
import { ICommonEncryptionService } from 'vs/platform/encryption/electron-main/common/encryptionService';
import { encrypt, decrypt } from 'vscode-encrypt';

export const IEncryptionMainService = createDecorator<IEncryptionMainService>('encryptionMainService');

export interface IEncryptionMainService extends ICommonEncryptionService { }

export class EncryptionMainService implements ICommonEncryptionService {
	declare readonly _serviceBrand: undefined;
	constructor(
		private machineId: string) {

	}

	encrypt(value: string): Promise<string> {
		return encrypt(this.machineId, value);
	}

	decrypt(value: string): Promise<string> {
		return decrypt(this.machineId, value);
	}
}

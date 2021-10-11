import type { NextApiRequest, NextApiResponse } from 'next';

import { ValidationError } from 'scrapper/exceptions/validation';
import { HTTPCodes } from 'scrapper/services/api/const';
import { validateParam } from 'scrapper/services/api/utils';
import { getOne } from 'scrapper/services/api/app';

/**
 * Search for a legal investments application from OJK's data
 *
 * @param {NextApiRequest} req - request object
 * @param {NextApiResponse} res - response object
 * @return {void}
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  if (req.method !== 'GET') {
    return res.status(405).json(undefined);
  }

  try {
    const params = validateParam(req.query);
    const { data, version } = getOne(params);

    if (data === null) {
      return res.status(HTTPCodes.NOT_FOUND)
        .json({
          data: null,
          error: 'Aplikasi tidak ditemukan',
        });
    }

    return res.status(HTTPCodes.SUCCESS)
      .json({
        data: {
          app: data,
          version,
        },
        error: null,
      });
  } catch (err) {
    let status = HTTPCodes.SERVER_ERROR;

    if (err instanceof ValidationError) {
      status = HTTPCodes.INVALID_PARAMS;
    }

    return res.status(status)
      .json({
        data: null,
        error: err.message,
      });
  }
}

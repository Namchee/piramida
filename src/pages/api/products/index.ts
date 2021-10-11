import type { NextApiRequest, NextApiResponse } from 'next';
import { ValidationError } from 'scrapper/exceptions/validation';

import { HTTPCodes } from 'scrapper/services/api/const';
import { validateQuery } from 'scrapper/services/api/utils';
import { getMany } from 'scrapper/services/api/product';

/**
 * Search for legal shared funds from OJK's data
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

  if (Array.isArray(req.query.name)) {
    return res.status(HTTPCodes.INVALID_PARAMS)
      .json({
        error: 'Nilai `name` hanya boleh ada satu',
      });
  }

  try {
    const query = validateQuery(req.query);
    const products = getMany(query);

    return res.status(HTTPCodes.SUCCESS)
      .json(products);
  } catch (err) {
    let status = HTTPCodes.SERVER_ERROR;

    if (err instanceof ValidationError) {
      status = HTTPCodes.INVALID_PARAMS;
    }

    return res.status(status)
      .json({
        error: err.message,
      });
  }
}
